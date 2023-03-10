from server import db, app
from flask import jsonify
from server.models import Games
from server.serializer import GamesSchema
from sqlalchemy.sql.expression import func
import pandas as pd
import numpy as np


def get_game_list():
    """Get data for any random 12 games from the database that have scores above 80.

        Returns:
            initial_games: Data for 12 random Games.
    """
    game_table = Games.games
    game_schema = GamesSchema(many=True)
    initial_games_query = db.session.query(game_table).filter(game_table.scores > '80').order_by(func.rand()).limit(
        12).all()
    initial_games = game_schema.dump(initial_games_query)
    return initial_games


def get_all_games():
    """Get all games for database and store into dataframe 'df'.

        Returns:
            df: dataframe df with rows of all games from the database
    """
    with app.app_context():
        query_df = pd.read_sql_query("""SELECT * FROM games;""", db.engine)
    df = pd.DataFrame(query_df, columns=[
        'title', 'images', 'summary', 'scores'])
    df.drop_duplicates('title', keep='first', inplace=True)
    df.reset_index(drop=True, inplace=True)
    return df


def get_pca_data():
    """Get PCA Data from the engine

        Returns:
            pca_data:PCA data that has been converted from pickle back to dataframe
    """
    pca_data = pd.read_pickle('/usr/app/backend/server/engine/pca_data.pkl')
    return pca_data


def get_embed_data():
    """Get Word Vector embeddings from engine

        Returns:
            embd: Numpy array of word vectors
    """
    embd = np.load('/usr/app/backend/server/engine/embed_data_np.npy')
    return embd


def getEachRecommendation(gam):
    """Get Game data for each game

        Parameters:
            gam: game title for which data needs to be fetched

        Returns:
            each_game_details: Json data for the game
    """
    game_table = Games.games
    game_schema = GamesSchema(many=True)
    each_game_detail_query = db.session.execute(
        db.select(game_table).filter_by(title=gam)).first()
    each_game_details = game_schema.dump(each_game_detail_query)
    return jsonify(each_game_details)

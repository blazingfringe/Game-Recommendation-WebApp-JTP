from server import create_db_connection
from sqlalchemy import text
import pandas as pd
import numpy as np

try:
    engine = create_db_connection()
    print("Connection Created Successfully")
except Exception as exp:
    print("Connection Failed due to: \n", exp)
js_data = []

def get_game_list():
    json_data = []
    with engine.connect() as connection:
        query_result = connection.execute(text("SELECT * FROM games WHERE scores > 80 ORDER BY RAND() LIMIT 12"))
        for rows in query_result:
            json_data.append(dict(rows))
    return json_data


def get_all_games():
    query_df = pd.read_sql_query("""SELECT * FROM games;""", engine)
    df = pd.DataFrame(query_df, columns=[
                      'title', 'images', 'summary', 'scores'])
    df.drop_duplicates('title', keep='first', inplace=True)
    df.reset_index(drop=True, inplace=True)
    return df


def get_pca_data():
    pca_data = pd.read_pickle('/usr/app/backend/server/engine/pca_data.pkl')
    return pca_data


def get_embed_data():
    embd = np.load('/usr/app/backend/server/engine/embed_data_np.npy')
    return embd

def ready_response():
    # print(js_data)
    js_data.clear()


def getEachRecommendation(gam):
    with engine.connect() as connection:
        recommendations_query = connection.execute(text('SELECT * FROM games WHERE title=:x LIMIT 1'), x=gam)
        for rows in recommendations_query:
            js_data.append(dict(rows))
    # print(js_data)
    return js_data

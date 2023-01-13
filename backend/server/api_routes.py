from server import app
from flask import jsonify, request
from flask_cors import cross_origin
from server.repository import get_game_list
from server.recommendations import get_games


@app.route('/game-list', methods=['GET'])
@cross_origin()
def home():
    """
    _summary_: API endpoint for getting initial game list

    Returns: 
        _type_: _description_: Json data of 12 games from the database
    """
    initial_game_list = get_game_list()
    return initial_game_list


@app.route('/api/recommendations', methods=['POST'])
@cross_origin()
def get_recommendation():
    """
    _summary_: API enpoint that takes in payload from front end
    and returns a json data for game recommendations for each entry in payload.

    Returns: 
        _type_: _description_: JSON Data of the Recommended Games
    """
    data = request.json
    recommendations = get_games(data)
    return jsonify(recommendations)

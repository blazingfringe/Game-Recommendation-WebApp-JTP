from server import app
from flask import jsonify, request
from flask_cors import cross_origin
from server.repository import get_game_list
from server.recommendations import get_games


@app.route('/game-list', methods=['GET'])
@cross_origin()
def home():
    initial_game_list = get_game_list()
    return initial_game_list


@app.route('/api/recommendations', methods=['POST'])
@cross_origin()
def get_recommendation():
    data = request.json
    recommendations = get_games(data)
    return jsonify(recommendations)

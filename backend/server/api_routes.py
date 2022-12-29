from server import app
from flask import jsonify, request
from flask_cors import cross_origin
from server.repository import get_game_list, getEachRecommendation, ready_response
from server.recommendations import give_recommendations
import sys


@app.route('/home', methods=['GET'])
@cross_origin()
def home():
    ready_response()
    json_data = get_game_list()
    return json_data


@app.route('/api/recommendations', methods=['POST'])
@cross_origin()
def get_recommendation():
    data ={}
    data = request.json
    length = len(data)
    print(length, file=sys.stdout)
    for i in range(length):
        gg = give_recommendations(str(data[i]))
        for gam in gg['Games']:
            js_data = getEachRecommendation(gam)
    return jsonify(js_data)
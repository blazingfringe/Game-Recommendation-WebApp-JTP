from server import app
from flask import jsonify, request
from flask_cors import cross_origin
from server.repository import get_game_list, getEachRecommendation, ready_response
from server.recommendations import give_recommendations
import json


@app.route('/home', methods=['GET'])
@cross_origin()
def home():
    ready_response()
    inital_game_list = get_game_list()
    return inital_game_list


@app.route('/api/recommendations', methods=['POST'])
@cross_origin()
def get_recommendation():
    ready_response()
    recommendations = []
    data = request.json
    # print(js_data)
    length = len(data)
    for i in range(length):
        gg = give_recommendations(str(data[i]))
        for gam in gg['Games']:
            js_data = json.loads(getEachRecommendation(gam).data)
            for val in js_data:
                recommendations.append(val)
    # print(js_data)
    return jsonify(recommendations)
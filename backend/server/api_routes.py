from server import app
from flask import jsonify, request
from flask_cors import cross_origin
from server.models import get_game_list, getEachRecommendation, ready_response
from server.recommendations import give_recommendations
from server.models import connection
import sys



# cors = CORS(app)
# app.config["CORS_HEADERS"] = "Content-Type"


@app.route('/home', methods=['GET'])
@cross_origin()
def home():
    ready_response()
    json_data = get_game_list()
    return json_data


@app.route('/api/recommendations', methods=['POST'])
@cross_origin()
def rec():
    # gg ={}
    data = request.json
    length = len(data)
    print(length, file=sys.stdout)
    for i in range(length):
        gg = give_recommendations(str(data[i]), True)
        for gam in gg['Games']:
            js_data = getEachRecommendation(gam)
    return jsonify(js_data)


# cursor.execute(
            #     f'SELECT * FROM games WHERE title="{gam}" LIMIT 1')
            # row_headers = [x[0] for x in cursor.description]
            # vals = cursor.fetchall()
            # for result in vals:
            #     js_data.append(dict(zip(row_headers, result)))
            #     # print(js_data)
        # print(len(js_data))
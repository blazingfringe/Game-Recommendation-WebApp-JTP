from flask import Flask
from flask_cors import CORS, cross_origin
from sqlalchemy import create_engine


app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


def create_db_connection():
    engine = create_engine("mysql+pymysql://root:root@mysql/gamesdb")
    return engine



from server import api_routes
from flask import Flask
from flask_cors import CORS, cross_origin
import mysql.connector


app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"


def create_db_connection():
    connection = mysql.connector.connect(host='mysql',
                                         user='root',
                                         password='root',
                                         port='3306',
                                         database='gamesdb')
    print('DB Connected')
    return connection

from server import api_routes
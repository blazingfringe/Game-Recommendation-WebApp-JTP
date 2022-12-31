from flask import Flask
from flask_cors import CORS, cross_origin
# from sqlalchemy import create_engine
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@mysql/gamesdb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False



db = SQLAlchemy(app)
ma = Marshmallow(app)

db.init_app(app)

# def create_db_connection():
#     engine = create_engine("mysql+pymysql://root:root@mysql/gamesdb")
#     return engine


from server import api_routes
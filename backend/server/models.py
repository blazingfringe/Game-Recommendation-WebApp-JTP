from server import db, app
from sqlalchemy.ext.automap import automap_base


class Games:
    """
    _summary_: Class to generate Base class for the model of the database,
    generated using automapping the existing database
    :games: The base class generated from the database columns
    """
    with app.app_context():
        Base = automap_base()
        Base.prepare(db.engine, reflect=True)
        games = Base.classes.games

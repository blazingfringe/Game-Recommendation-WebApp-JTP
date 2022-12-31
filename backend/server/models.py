from server import db, app
from sqlalchemy.ext.automap import automap_base


class Games:
    with app.app_context():
        Base = automap_base()
        Base.prepare(db.engine, reflect=True)

        games = Base.classes.games

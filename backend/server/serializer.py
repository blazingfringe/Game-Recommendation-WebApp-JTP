from server.models import Games
from server import ma


class GamesSchema(ma.SQLAlchemyAutoSchema):
    """
    Class to Serialize database queries
    """
    class Meta:
        model = Games.games
        load_instance = True

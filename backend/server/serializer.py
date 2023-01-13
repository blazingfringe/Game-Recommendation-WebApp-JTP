from server import ma
from server.models import Games


class GamesSchema(ma.SQLAlchemyAutoSchema):
    """
    _summary_: Class to Serialize database queries
    """
    class Meta:
        model = Games.games
        load_instance = True

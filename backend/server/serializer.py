from server import ma
from server.models import Games


class GamesSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Games.games
        load_instance = True

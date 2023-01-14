from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import json
from server.repository import get_all_games, get_embed_data, get_pca_data, getEachRecommendation


""" Get all the rows from the database to store in dataframe """
df = get_all_games()

""" Get Recommendation Engine files """
pca_data = get_pca_data()
word_vectors = get_embed_data()

""" Generate Cosine Similarity values for each word vector """
cos_sim_values = pd.DataFrame(cosine_similarity(word_vectors))
indices = pd.Series(pca_data.index, index=df['title'])


def give_recommendations(name):
    """
    Generate 3 Similar Recommendations for Game provided as input.

        Parameters:
            name: This is the game for which recommendations are being generated

        Returns: 
            result: The result with all the data for the 3 Recommended Games
    """
    result = {}
    index = indices[name]
    # Get 3 Recommendations for the queried Game
    recommended_indices = cos_sim_values.loc[index].sort_values(
        ascending=False).index.tolist()[1:4]
    # Store the Recommendations in Dataframe
    games_rec = df['title'].loc[recommended_indices].values
    result = {'Games': games_rec, 'Index': recommended_indices}
    return result


def get_games(data):
    """
    Get Recommendations for each of the game provided from the payload.

        Parameters:
            data: Takes in an json of names of the games to generate recommendations for.
        Returns:
            recommendations: Game Data for all the Recommendations.
    """
    recommendations = []
    length = len(data)
    for i in range(length):
        gg = give_recommendations(str(data[i]))
        for gam in gg['Games']:
            js_data = json.loads(getEachRecommendation(gam).data)
            for val in js_data:
                recommendations.append(val)
    return recommendations

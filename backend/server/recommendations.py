from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import json
from server.repository import get_all_games, get_embed_data, get_pca_data, getEachRecommendation

df = get_all_games()
pca_data = get_pca_data()
word_vectors = get_embed_data()

cos_sim_values = pd.DataFrame(cosine_similarity(word_vectors))
indices = pd.Series(pca_data.index, index=df['title'])


def give_recommendations(name):
    result = {}
    index = indices[name]
    # Get 4 Recommendations for the queried Game
    recommended_indices = cos_sim_values.loc[index].sort_values(
        ascending=False).index.tolist()[1:5]
    # Store the Recommendations in Dataframe
    games_rec = df['title'].loc[recommended_indices].values
    result = {'Games': games_rec, 'Index': recommended_indices}
    return result


def get_games(data):
    recommendations = []
    length = len(data)
    for i in range(length):
        gg = give_recommendations(str(data[i]))
        for gam in gg['Games']:
            js_data = json.loads(getEachRecommendation(gam).data)
            for val in js_data:
                recommendations.append(val)
    return recommendations

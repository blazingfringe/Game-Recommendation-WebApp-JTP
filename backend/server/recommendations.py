from sklearn.cluster import KMeans
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import numpy as np
from server.repository import get_all_games, get_embed_data, get_pca_data


df = get_all_games()
pca_data = get_pca_data()
word_vectors = get_embed_data()


cos_sim_values = pd.DataFrame(cosine_similarity(word_vectors))
indices = pd.Series(pca_data.index, index=df['title'])


def give_recommendations(name):
    index = indices[name]
    index_recomm = cos_sim_values.loc[index].sort_values(
        ascending=False).index.tolist()[1:6]
    games_rec = df['title'].loc[index_recomm].values
    result = {'Games': games_rec, 'Index': index_recomm}
    return result

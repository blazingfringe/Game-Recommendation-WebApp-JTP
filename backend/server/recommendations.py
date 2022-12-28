from sklearn.cluster import KMeans
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import numpy as np
from server.repository import get_all_games, get_embed_data, get_pca_data


df = get_all_games()
pca_data = get_pca_data()
embd = get_embed_data()


X = np.array(embd)
cos_sim_data = pd.DataFrame(cosine_similarity(X))
indices = pd.Series(pca_data.index, index=df['title'])


def give_recommendations(name, print_recommendation=False):
    index = indices[name]
    index_recomm = cos_sim_data.loc[index].sort_values(
        ascending=False).index.tolist()[1:6]
    games_rec = df['title'].loc[index_recomm].values
    result = {'Games': games_rec, 'Index': index_recomm}
    if print_recommendation == True:
        print('The Played Game is this one: %s \n' %
              (df['title'].loc[index]))
        k = 1
        for game in games_rec:
            print('The number %i recommended game is this one: %s \n' % (k, game))
    return result

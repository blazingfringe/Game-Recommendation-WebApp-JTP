import numpy as np
import pandas as pd
import mysql.connector
from sentence_transformers import SentenceTransformer
from sklearn.decomposition import PCA


mydb = mysql.connector.connect(
    host='mysql', user='root', password='root', database='gamesdb', use_pure=True)
sql_query = pd.read_sql_query('''SELECT * from games;''', mydb)
df = pd.DataFrame(sql_query, columns=['title', 'images', 'summary', 'scores'])
df.drop_duplicates('title', keep='first', inplace=True)
df.reset_index(drop=True, inplace=True)
summary_array = np.array(df.summary)
encoder = SentenceTransformer('all-mpnet-base-v2')
print("Starting Encoding Please Wait....  ")
word_vectors = encoder.encode(summary_array, show_progress_bar=True)
print("Encoding Finished")

# Save Embedded Data to npy file
np.save('embed_data_np', word_vectors)
print("Word Vector Embeddings saved")
n_comps = 6
decomposer = PCA(n_components=n_comps)
decomposer.fit(word_vectors)
pca_data = pd.DataFrame(decomposer.transform(word_vectors))

# Pickle PCA Decomposed data
pca_data.to_pickle("./pca_data.pkl")
print("PCA Data Pickled")

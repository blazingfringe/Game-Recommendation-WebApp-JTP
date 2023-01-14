import numpy as np
import pandas as pd
import mysql.connector
from sentence_transformers import SentenceTransformer
from sklearn.decomposition import PCA

"""
    Generate files for recommendations by building the model
"""

# Connect to the database
mydb = mysql.connector.connect(
    host='mysql', user='root', password='root', database='gamesdb', use_pure=True)

# Get all games for analysis
sql_query = pd.read_sql_query('''SELECT * from games;''', mydb)
df = pd.DataFrame(sql_query, columns=['title', 'images', 'summary', 'scores'])

# Drop repeating entries from dataframe
df.drop_duplicates('title', keep='first', inplace=True)

# Reset index to reflect new number of rows
df.reset_index(drop=True, inplace=True)

# Get numpy array for summary of all the games
summary_array = np.array(df.summary)

# Initialize Encoder
encoder = SentenceTransformer('all-mpnet-base-v2')
print("Starting Encoding Please Wait....  ")
word_vectors = encoder.encode(summary_array, show_progress_bar=True)
print("Encoding Finished")

# Save Embedded Data to npy file
np.save('embed_data_np', word_vectors)
print("Word Vector Embeddings saved")

# Reduce Dimensionality using PCA Method
n_comps = 6
decomposer = PCA(n_components=n_comps)
decomposer.fit(word_vectors)
pca_data = pd.DataFrame(decomposer.transform(word_vectors))

# Pickle PCA Decomposed data
pca_data.to_pickle("./pca_data.pkl")
print("PCA Data Pickled")

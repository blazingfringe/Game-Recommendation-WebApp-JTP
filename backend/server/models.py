from server import create_db_connection
import pandas as pd
import numpy as np

connection = create_db_connection()
js_data = []

def get_game_list():
    cursor = connection.cursor()
    cursor.execute(
        'SELECT * FROM games WHERE scores > 80 ORDER BY RAND() LIMIT 12')
    row_headers = [x[0] for x in cursor.description]
    games = cursor.fetchall()
    json_data = []
    for result in games:
        json_data.append(dict(zip(row_headers, result)))
    return json_data
# connection.close()


def get_all_games():
    query_df = pd.read_sql_query("""SELECT * FROM games;""", connection)
    df = pd.DataFrame(query_df, columns=[
                      'title', 'images', 'summary', 'scores'])
    df.drop_duplicates('title', keep='first', inplace=True)
    df.reset_index(drop=True, inplace=True)
    return df


def get_pca_data():
    pca_data = pd.read_pickle('/usr/app/src/server/engine/pca_data.pkl')
    return pca_data


def get_embed_data():
    embd = np.load('/usr/app/src/server/engine/embed_data_np.npy')
    return embd

def ready_response():
    if len(js_data) > 0:
        js_data.clear()


def getEachRecommendation(gam):
    cursor = connection.cursor()
    cursor.execute(
        f'SELECT * FROM games WHERE title="{gam}" LIMIT 1')
    row_headers = [x[0] for x in cursor.description]
    vals = cursor.fetchall()
    
    for result in vals:
        js_data.append(dict(zip(row_headers, result)))
        # no_of_values = []
        # print(no_of_values.append(len(js_data)))
    return js_data

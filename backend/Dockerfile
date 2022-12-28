FROM python:3.9

WORKDIR /usr/app/src
COPY requirements.txt /usr/app/src/requirements.txt
COPY /server/engine/embed_data_np.npy /usr/app/src/server/engine/embed_data_np.npy
COPY /server/engine/pca_data.pkl /usr/app/src/server/engine/pca_data.pkl

RUN pip install -r requirements.txt


COPY /server/recommendations.py /usr/app/src/server/recommendations.py
COPY /server/repository.py /usr/app/src/server/repository.py
COPY /server/api_routes.py /usr/app/src/server/api_routes.py
COPY /server/__init__.py /usr/app/src/server/__init__.py
COPY run_server.py ./
FROM python:3.9

WORKDIR /usr/app/backend
COPY requirements.txt /usr/app/backend/requirements.txt
COPY /server/engine/embed_data_np.npy /usr/app/backend/server/engine/embed_data_np.npy
COPY /server/engine/pca_data.pkl /usr/app/backend/server/engine/pca_data.pkl
COPY /server/engine/engine_generator.py /usr/app/backend/server/engine/engine_generator.py

RUN pip install -r requirements.txt

COPY /server/recommendations.py /usr/app/backend/server/recommendations.py
COPY /server/models.py /usr/app/backend/server/models.py
COPY /server/serializer.py /usr/app/backend/server/serializer.py
COPY /server/repository.py /usr/app/backend/server/repository.py
COPY /server/api_routes.py /usr/app/backend/server/api_routes.py
COPY /server/__init__.py /usr/app/backend/server/__init__.py
COPY run_server.py ./
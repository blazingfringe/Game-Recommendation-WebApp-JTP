# How to re-generate the recommendaton engine files

## Start a bash session once the docker backend containers are ready

<strong>This will regenerate the two engine files required for the recommendations</strong>
<br>
<em>This takes a long time to work, please wait for the process to finish, progress can be tracked in the progress bar shown in the terminal</em>

- Into a terminal or command prompt:

  - To get the container ID for the backend container:
    `docker container ls`

  - To start bash session:
    `docker container exec -it {container id} /bin/bash`

  <em>For example:
  `docker exec -it 50e20d2eae20 /bin/bash`</em>

- Get into the engine directory:
  `cd server/engine`

- Run the engine_generator.py file
  `python3 engine_generator.py`

- This will start the process of building the model for regenerating the files

<img width="600" src='https://i.imgur.com/FQ7kAtw.png' alt='Engine building model for regenerating files'>

- Once the process completes, the terminal will show output as:

<img width="600" src='https://i.imgur.com/xYfOXv1.png' alt='Engine rebuilding complete'>

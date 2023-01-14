# Game Recommendation System

<img  src='https://i.imgur.com/WLdemz3.png' alt='Game-Recommendation-System'>

<br/>

### A Recommendation System that uses machine learning for suggesting a list of games based on user's selection

<em>Built using Python Flask, React.JS and completely containerized using docker.</em>
<br/>

- The Gaming Industry by the year 2022 has emerged as a giant that seems to grow to reach unprecedented levels.
- The Industry sees more revenue than even the film and TV industry combined.
- As a still growing venture with profitable future many companies have foraged into the gaming business, in which a new popular model of online gaming service is provided.

## Goals:

- This Recommendation WebApp aims to provide a recommendation of games from a catalog, for the user based on their selections.
- This will allow the user to get access to a list games matching their preferences.

### To get Recommendations:

- Users will be able to select 5 games from the provided random catalog of games.
- The Recommendation System will generate a list of similar games, that will be presented to the user.

<br/>

![](./GameRecommender_Preview.gif)

<br/>

# How to install this project using Docker

<strong>Initial build will take a long time</strong>

1. Clone this project
2. Set up docker on the local system - https://docs.docker.com/get-docker/
3. Make sure local ports: 3000, 3306 and 8000 are unused
4. Using a terminal or command prompt: Get into the base directory of the cloned folder
5. Start using the command: `docker-compose up --build`
   - <em>This will begin downloading of the dependencies</em>
   - <em>Containers will start once database will initialize as it takes some time</em>
6. Upon completion of the build, the project will be available for use on: http://localhost:3000/ on the local system

## FAQ

1. Is my build stuck at EntryPoint process?
  - It may appear as stuck but the process is running to initialize the database
  - It takes some time to initialize the database, it takes up-to 5 minutes to initialize the database.
  - The process will look like this on the terminal:
    <br/>
    <img width="600px" src="https://i.imgur.com/hhxTylz.jpg" alt="database-init">
  - Once the build completes, this will be the status at the terminal and the   web-app can be accessed from http://localhost:3000:
    <br/>
    <img width="600px" src="https://i.imgur.com/BKUf6SC.png" alt="build-complete">

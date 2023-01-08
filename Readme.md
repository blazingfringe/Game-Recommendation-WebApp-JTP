# Game Recommnedation System

## A Recommendation System that uses machine learning for suggesting a list of games based on user's selection, built using Python Flask, React.JS and completely containerized using docker.

The Gaming Industry by the year 2022 has emerged as a giant that seems to grow to reach unprecedented levels.
The Industry sees more revenue than even the film and TV industry combined. As a still growing venture with profitable future many companies have foraged into the gaming business, in which a new popular model of online gaming service is provided.

This Recommendation WebApp aims to provide a recommendation of games from a catalog, for the user based on their selections. This will allow the user to not only get access to a list games matching their preferences. So as to emulate a user's experince upon availing such an online gaming service.

To get Recommendations:
-Users will be able to select 5 games from the provided random catalog of games.
-The Recommendation System will generate a list of similar games, that will be presented to the user.

## How to install this project using Docker

<strong>Initial build will take a long time</strong>

1. Clone this project
2. Set up docker on the local system - https://docs.docker.com/get-docker/
3. Make sure local ports: 3000, 3306 and 8000 are unused
4. Using a terminal or command prompt: cd into the base directory
5. Start using the command - `docker compose up --build`
   - <em>This will begin downloading of the dependencies</em>
   - <em>Containers will start once database will initialize as it takes some time</em>
6. Upon completion project will be avialable for use on: http://localhost:3000/ on the local system

## Installation

__Clone the repository__

    git clone https://github.com/zit-hb/langtron.git
    cd langtron

__Build the game__

    docker build -t tron .

## Launch server

    docker run --rm --name tron -p 8080:8080 tron

## Play

Go to [http://localhost:8080/](http://localhost:8080/)
Join a room, choose a player name and play!

#!/bin/bash
cd ~/projects/estudo-threejs
GIT_SSH_COMMAND='ssh -i ~/.ssh/game_github' git pull
sudo docker compose up --build -d

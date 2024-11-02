#!/bin/bash
cd ~/projects/estudo-threejs
GIT_SSH_COMMAND='ssh -i ~/.ssh/game_github' git pull
docker compose up --build -d

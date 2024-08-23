#!/bin/bash

PROJECT_NAME=$1;

if [ -z $PROJECT_NAME ]; then
  echo "No project name provided, using default name: vite-react-app";
  PROJECT_NAME="vite-react-app";
fi

# check if bun is installed
if ! command -v bun &> /dev/null
then
    echo "bun could not be found, please install it globally by running: curl -fsSL https://bun.sh/install | bash"
    exit
fi

bun create vite $PROJECT_NAME;
cd $PROJECT_NAME;
bun add @tanstack/react-router
bun add @tanstack/react-query
bun add -D @tanstack/router-plugin @tanstack/router-devtools
bun install -D tailwindcss postcss autoprefixer
bunx tailwindcss init -p
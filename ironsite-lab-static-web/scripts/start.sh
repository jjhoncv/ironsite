#!/bin/bash
# $1 = PROJECT_NAME

sudo chmod -R 777 ~/$1

export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

cd ~/$1

npm install

PROJECT_NAME=$1 npm run publish
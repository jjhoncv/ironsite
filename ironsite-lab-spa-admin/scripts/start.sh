#!/bin/bash
# $1 = PROJECT_NAME
# $2 = PROJECT_DEPLOY

sudo chmod -R 777 ~/$1

rm -fr $HOME/$PROJECT_DEPLOY/

mkdir -p $HOME/$PROJECT_DEPLOY

cp -r ~/$1/* $HOME/$PROJECT_DEPLOY/
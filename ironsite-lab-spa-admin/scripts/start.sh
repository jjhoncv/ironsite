#!/bin/bash
# $1 = PROJECT_NAME
# $2 = PROJECT_DEPLOY

sudo chmod -R 777 ~/$1

rm -fr $HOME/$2/

mkdir -p $HOME/$2

cp -r ~/$1/* $HOME/$2/
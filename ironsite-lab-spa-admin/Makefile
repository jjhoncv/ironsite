include makefiles/deploy.ec2.mk

OWNER 		 = ironsite
TYPE 		 = spa
SERVICE      = admin
STAGE        = lab

NETWORK_NAME ?= ${OWNER}_network
PROJECT_NAME ?= ${OWNER}-${STAGE}-${TYPE}-${SERVICE}

network:
	@docker network create ${NETWORK_NAME} || true

install:
	@docker run \
		-it \
		--rm \
		-u 1000:1000 \
		-v $(PWD)/app:/app \
		-w /app \
		node:11-slim \
		npm install

start:network
	@export NETWORK_NAME="$(NETWORK_NAME)" \
	PROJECT_NAME="$(PROJECT_NAME)" && \
		docker-compose up -d

restart:network
	@export NETWORK_NAME="$(NETWORK_NAME)"\
	PROJECT_NAME="$(PROJECT_NAME)" && \
		docker-compose restart

stop:network
	@export NETWORK_NAME="$(NETWORK_NAME)"\
	PROJECT_NAME="$(PROJECT_NAME)" && \
		docker-compose stop

logs:network
	@export NETWORK_NAME="$(NETWORK_NAME)" && \
		docker-compose logs -f --tail=10
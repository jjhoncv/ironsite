include ../ServerEC2.mk
PROJECT_SERVER     ?= ${SERVER_NAME}:~/${PROJECT_NAME}

PROJECT_DEPLOY_NAME = ironsite-lab-static-web
PROJECT_DEPLOY_DIR  = src/public/admin

PROJECT_DEPLOY      = ${PROJECT_DEPLOY_NAME}/${PROJECT_DEPLOY_DIR}

build:
	@docker run \
		-it \
		--rm \
		-u 1000:1000 \
		--env-file ./app/.env.prod \
		-v $(PWD)/app:/app \
		-w /app \
		node:11-slim \
		npm run build
	@cp -r scripts app/dist

deploy:
	@rsync -avL --del -e "ssh -i DashboardApiKey.pem" \
		app/dist/ ${PROJECT_SERVER}
	ssh -i DashboardApiKey.pem ${SERVER_NAME} \
	'cd ~/${PROJECT_NAME}; sh scripts/start.sh ${PROJECT_NAME} ${PROJECT_DEPLOY}'


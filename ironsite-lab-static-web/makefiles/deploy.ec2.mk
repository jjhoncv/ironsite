SERVER_NAME     = ubuntu@ec2-54-95-81-0.ap-northeast-1.compute.amazonaws.com
PROJECT_SERVER ?= ${SERVER_NAME}:~/${PROJECT_NAME}

build:
	@docker run \
		-it \
		--rm \
		-u 1000:1000 \
		--name ${PROJECT_NAME} \
		-v $(PWD)/app:/app \
		-w /app \
		node:11-slim \
		npm run build
	@cp -r app/src/public app/dist/src
	@cp -r app/src/views app/dist/src
	@cp -r app/package.json app/dist
	@cp -r scripts app/dist
	@cp app/.env.prod app/dist/.env

deploy:
	@rsync -avL --del -e "ssh -i DashboardApiKey.pem" \
		app/dist/ ${PROJECT_SERVER}
	ssh -i DashboardApiKey.pem ${SERVER_NAME} \
	'cd ~/${PROJECT_NAME}; sh scripts/start.sh ${PROJECT_NAME}'

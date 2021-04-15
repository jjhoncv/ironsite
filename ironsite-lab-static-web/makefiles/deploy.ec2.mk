include ../ServerEC2.mk
PROJECT_SERVER ?= ${SERVER_NAME}:~/${PROJECT_NAME}

build:
	@docker run \
		-it \
		--rm \
		-u 1000:1000 \
		-v $(PWD)/app:/app \
		-w /app \
		node:11-slim \
		npm run build:server
	
	@mkdir -p app/dist/src/server/public
	@cp -r app/src/server/public/statics app/dist/src/server/public/statics
	@cp -r app/src/server/public/uploads app/dist/src/server/public/uploads
	@cp -r app/src/server/public/favicon.ico app/dist/src/server/public
	@cp -r app/package.json app/dist
	@cp -r app/package-lock.json app/dist
	@cp -r scripts app/dist
	@cp app/.env.prod app/dist/.env
	
	@docker run \
		-it \
		--rm \
		-u 1000:1000 \
		-v $(PWD)/app:/app \
		-w /app \
		node:11-slim \
		npm run build:client
	@cp -r app/out/* app/dist/src/server/public/statics/js
	
deploy:
	@rsync -avL \
		-e "ssh -i DashboardApiKey.pem" \
		app/dist/ ${PROJECT_SERVER}
	ssh -i DashboardApiKey.pem ${SERVER_NAME} \
	'cd ~/${PROJECT_NAME}; sh scripts/start.sh ${PROJECT_NAME}'

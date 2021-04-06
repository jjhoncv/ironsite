include ServerEC2.mk

pm2.list:
	ssh -i DashboardApiKey.pem ${SERVER_NAME} \
	'pm2 list'

pm2.logs:
	ssh -i DashboardApiKey.pem ${SERVER_NAME} \
	'pm2 logs'	
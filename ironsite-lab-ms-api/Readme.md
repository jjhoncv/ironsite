# ironsite-lab-ms-api
- docker
- nodejs
- express
- mysql

## local
Need file .env in root folder /app with this configs
```sh
MYSQL_HOST=bd
MYSQL_USER=user
MYSQL_PASSWORD=12345678
MYSQL_DATABASE=ironsite

MYSQL_ROOT_PASSWORD=12345678

SERVER_HOST=http://localhost
SERVER_PORT=4000
```

Only commands by local
```sh
make install
```

```sh
make start
```

```sh
make stop
```
## production
Need file .env.prod in root folder /app with this configs, by eg:
```sh
MYSQL_HOST=dashboardinstance.xxxxx.ap-northeast-1.rds.amazonaws.com
MYSQL_USER=admin
MYSQL_PASSWORD=xxxxx
MYSQL_DATABASE=dashboard

MYSQL_ROOT_PASSWORD=xxxxx

SERVER_HOST=http://IP_SERVER
SERVER_PORT=4000
```

need connection to EC2 key DashboardApiKey.pem in root this folder
```sh
make build
```

```sh
make deploy
```
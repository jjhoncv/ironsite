# ironsite-lab-ms-api-bd
- docker
- nodejs
- express
- mysql

## custom after
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

Install in server EC2 nodejs
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
```

## local
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
need connection to EC2 key DashboardApiKey.pem in root this folder
```sh
make build
```

```sh
make deploy
```

<!-- # install node
#download node and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node -->
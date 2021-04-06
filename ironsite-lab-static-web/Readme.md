# ironsite-lab-static-web
- docker
- nodejs
- reacjs
- typescript


## local
Need file .env in root folder /app with this configs
```sh
SERVER_HOST=http://localhost
SERVER_PORT=3000

API_LOGIN=http://ironsite-lab-ms-api:4000/api/auth/login
API_REGISTER=http://ironsite-lab-ms-api:4000/api/auth/register
API_PRODUCTS=http://ironsite-lab-ms-api:4000/api/products
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
Need file .env.prod in root folder /app with this configs, by eg.
```sh
SERVER_HOST=http://IP_SERVER
SERVER_PORT=3000

API_LOGIN=http://IP_SERVER/api/auth/login
API_REGISTER=http://IP_SERVER/api/auth/register
API_PRODUCTS=http://IP_SERVER/api/products
```

need connection to EC2 key DashboardApiKey.pem in root this folder
```sh
make build
```

```sh
make deploy
```
# ironsite-lab-spa-admin
- docker
- nodejs
- reacjs
- typescript

## custom after
Need file .env in root folder /app with this configs
```sh
PATH_STATIC=http://localhost:5000
PUBLIC_PATH=http://localhost:5000

API_LOGIN=http://localhost:4000/api/auth/login
API_REGISTER=http://localhost:4000/api/auth/register
API_PRODUCTS=http://localhost:4000/api/products
```

## local
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
need connection to EC2 key DashboardApiKey.pem in root this folder
```sh
make build
```

```sh
make deploy
```
# ironsite
site make in nodejs by deploy to server EC2
- ms-api
- spa-admin
- static-web
- proxy

## ms-api
endpoint by connection static-web and spa-admin

## spa-admin
admin reactjs by static-web

## static-web
site web

## proxy
connect site web to port 80 in proxy reverse 

# custom after
Install in server EC2 nodejs
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
```
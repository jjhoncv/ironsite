# ironsite
site make in nodejs by deploy to server EC2
- ms-api
- spa-admin
- static-web
- proxy

1. Demo site web [link](http://ironsite.tk)
2. Demo spa admin [link](http://ironsite.tk/admin)
3. Demo ms api [link](http://ironsite.tk/api)

### ms-api
endpoint by connection static-web and spa-admin

### spa-admin
admin reactjs by static-web

### static-web
site web

### proxy
connect site web to port 80 in proxy reverse 

# custom after
Install in server EC2 nodejs
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
```

Install in server PM2 global
```sh
npm install pm2 -g
```

Install in server EC2 nginx
```sh
sudo apt update
sudo apt install nginx
```

Configure Firewall
```sh
sudo ufw app list
sudo ufw allow 'Nginx HTTP'
```

Commands nginx
```sh
systemctl status nginx
sudo systemctl start nginx
sudo systemctl stop nginx
```

Create proxy reverse nginx
Modified file /etc/nginx/sites-available/default with these lines
```sh
server {
    listen 80;

    server_name IP_SERVER;

    location / {
        include /etc/nginx/includes/proxy.conf;
        proxy_pass http://IP_SERVER:3000;
    }

    location /api {
        include /etc/nginx/includes/proxy.conf;
        proxy_pass http://IP_SERVER:4000/api;
    }

    access_log off;
    error_log  /var/log/nginx/error.log error;
}
```

create directory /etc/nginx/includes
```sh
sudo mkdir -p /etc/nginx/includes
```

And create file /etc/nginx/includes/proxy.conf with these lines
```sh
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_buffering off;
proxy_request_buffering off;
proxy_http_version 1.1;
proxy_intercept_errors on;
```

before restart ngnix
```sh
sudo systemctl restart nginx
```


FROM edvisor/nginx-node

#Copy src files to docker container
COPY . /usr/src/app

#Install wkhtmltopdf which hackmyresume depends on
RUN apt-get update && apt-get install -y \
            wkhtmltopdf

RUN npm install -g typescript rimraf webpack  webpack-dev-server supervisor phantomjs-prebuilt hackmyresume

WORKDIR /usr/src/app/client
RUN npm install
RUN npm run build:prod

WORKDIR /usr/src/app
COPY default.conf /etc/nginx/conf.d/
RUN npm install
RUN mv -f server/prod.config.json server/config.json
ENTRYPOINT ["/usr/src/app/start_container.sh"]

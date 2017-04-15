FROM edvisor/nginx-node

# Install and build the application
COPY . /usr/src/app

WORKDIR /usr/src/app/client
RUN npm install
RUN npm run build:prod
COPY default.conf /etc/nginx/conf.d/
COPY default.conf /etc/nginx/conf.d/

WORKDIR /usr/src/app
RUN npm install
RUN npm install -g typescript rimraf webpack  webpack-dev-server supervisor phantomjs-prebuilt hackmyresume
RUN mv -f server/prod.config.json server/config.json
ENTRYPOINT ["/usr/src/app/start_container.sh"]

FROM sinet/nginx-node:latest

# Install and build the application
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install
RUN npm install -g supervisor phantomjs hackmyresume
COPY default.conf /etc/nginx/conf.d/
COPY default.conf /etc/nginx/conf.d/
RUN mv -f server/prod.config.json server/config.json

ENTRYPOINT ["/usr/src/app/start_container.sh"]

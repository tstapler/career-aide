FROM node:9-stretch


#Install weasyprint which hackmyresume depends on
RUN apt-get update && apt-get install -y \
  build-essential \
  python3-dev \
  python3-pip \
  python3-cffi \
  libcairo2 \
  libpango-1.0-0 \
  libpangocairo-1.0-0 \
  libgdk-pixbuf2.0-0 \
  libffi-dev \
  shared-mime-info \
 && rm -rf /var/lib/apt/lists/*

 RUN pip3 install WeasyPrint


RUN mkdir -p /app

COPY ./package.json /app/package.json
RUN cd /app && npm install

#Copy server files to docker container
COPY ./server /app/server
COPY ./common /app/common

WORKDIR /app

ENTRYPOINT ["node", "server/server.js"]

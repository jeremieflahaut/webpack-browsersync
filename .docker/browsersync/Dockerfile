FROM node:lts-alpine
WORKDIR /app
RUN apk update && apk upgrade
#install browser-sync
RUN npm install -g browser-sync

COPY bs-config.js /bs-config.js
COPY startup.sh /startup.sh

CMD ["sh", "/startup.sh"]
FROM node:lts-alpine
WORKDIR /app
RUN apk update && apk upgrade

RUN npm install -g webpack

COPY startup.sh /startup.sh

CMD ["sh", "/startup.sh"]
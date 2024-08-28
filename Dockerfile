FROM node:20

ENV APP_ROOT /opt/app
ENV LANG C.UTF-8

RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

COPY . $APP_ROOT

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

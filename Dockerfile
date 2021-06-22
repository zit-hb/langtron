FROM node:15-buster
WORKDIR /opt/tron
COPY ./ /opt/tron
RUN \
  chown -R node:node /opt/tron && \
  npm install -g gulp && \
  npm install -g bower
USER node
RUN \
  npm install && \
  gulp
EXPOSE 8080
CMD ["node", "bin/curvytron.js"]

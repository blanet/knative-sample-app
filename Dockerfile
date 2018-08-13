FROM mhart/alpine-node:latest
COPY index.js /data/index.js
ENTRYPOINT ["node", "/data/index.js"]


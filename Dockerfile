FROM node:14-alpine

USER node

RUN mkdir -p /home/node/garciag-pyf-prisma

WORKDIR /home/node/garciag-pyf-prisma

COPY --chown=node . ${WORKDIR}

RUN yarn install

ENV PORT=4000

EXPOSE 4000

CMD ["yarn", "start"]
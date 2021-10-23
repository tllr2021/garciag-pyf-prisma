FROM node:14-alpine

USER node

RUN mkdir -p /home/node/garciag-pyf-prisma

WORKDIR /home/node/garciag-pyf-prisma

COPY --chown=node . ${WORKDIR}

RUN yarn install

ENV PORT=4000
ENV PRISMA_SECRET=mysecret123
ENV APP_SECRET=jwtsecret123
ENV URL_BASE=http://147.182.187.121:4466
ENV ENVIRONMENT=development
ENV PRISMA_MANAGEMENT_SECRET=KM06ddQupVFUew

EXPOSE 4000

CMD ["yarn", "start"]
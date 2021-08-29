FROM mhart/alpine-node

LABEL maintainer = "shadow <wuh131420@gmail.com>"

WORKDIR /usr/src/app

COPY package.json /usr/src/app


RUN yarn

COPY . /usr/src/app

# ENV NODE_ENV production

# COPY  ./app/public /usr/src/app/public
# COPY  ./app/.next /usr/src/app/.next
# COPY  ./app/node_modules /usr/src/app/node_modules

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /usr/src/app/.next
USER nextjs

EXPOSE 3000
# EXPOSE 3100

CMD npm run build

CMD ["node_modules/.bin/next", "start"]

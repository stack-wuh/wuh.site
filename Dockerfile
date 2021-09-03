FROM mhart/alpine-node

LABEL maintainer = "shadow <wuh131420@gmail.com>"

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app/

RUN npm config set registry https://registry.npm.taobao.org

RUN yarn

COPY . /usr/src/app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /usr/src/app/output
USER nextjs

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]

FROM node:12-alpine as builder

#WORKDIR .
COPY . .
RUN apk add autoconf libtool automake
#RUN apk add libtool
#RUN apk add automake
RUN apk --update add gcc make g++ zlib-dev
#RUN npm install
RUN yarn
#EXPOSE 3000
RUN yarn build
#CMD ["yarn", "start"]

## production environment
FROM nginx:1.16.0-alpine
COPY --from=builder ./nginx.conf /etc/nginx/
COPY --from=builder ./build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
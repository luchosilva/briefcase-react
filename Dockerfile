FROM node:16.14.2-alpine
WORKDIR /usr/app
COPY . .
EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["start"]

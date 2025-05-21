FROM node:20-alpine

WORKDIR /app
COPY . .

RUN npm install --production

EXPOSE 8080 5005

CMD ["node", "index.js"]

FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install --production
EXPOSE 5005
CMD ["node", "index.js"]
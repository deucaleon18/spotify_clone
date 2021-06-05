FROM node:alpine
RUN mkdir -p /app/src
WORKDIR /app/src
COPY package.json .
RUN npm install 
COPY . .
EXPOSE 5000
CMD ["npm","start"]

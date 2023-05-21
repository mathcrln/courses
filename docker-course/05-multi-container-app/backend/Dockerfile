FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 80
ENV MONGO_DB_USERNAME=root
ENV MONGO_DB_PASSWORD=secret
CMD ["npm", "start"]
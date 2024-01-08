FROM node:20
WORKDIR  /app

# Install app dependencies

COPY package*.json ./
RUN npm install

#Bundle app source
COPY . .
EXPOSE 3200
CMD ["npm", "start"]
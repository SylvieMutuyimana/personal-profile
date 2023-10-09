# Use the official Node.js image as the base image
FROM node:14

WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Specify the command to start your application
CMD ["npm", "start"]

# Use official Node image
FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose app port
EXPOSE 3000

# Start app
CMD ["npm", "start"]


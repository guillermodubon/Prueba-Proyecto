# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Expose port and set command
EXPOSE 3000
CMD ["npm", "run", "preview"]

# Use an official Node.js runtime as the base image
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a smaller image for serving the application
FROM node:18-alpine AS production

# Set the working directory
WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app/dist ./dist

# Install a lightweight HTTP server (if not already included in the project)
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 5173

# Command to serve the application
CMD ["serve", "-s", "dist", "-l", "5173"]
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

# Use nginx for serving static files - melhor performance que 'serve'
FROM nginx:alpine AS production
# Copiar configuração do nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Adicionar configuração para SPA routing
RUN echo 'server { \
    listen 5173; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose the port the app will run on
EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
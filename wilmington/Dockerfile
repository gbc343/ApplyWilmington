# Use lightweight nginx image
FROM nginx:alpine

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy exported static site into nginx public directory
COPY out /usr/share/nginx/html

# Expose port 80 to the host
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

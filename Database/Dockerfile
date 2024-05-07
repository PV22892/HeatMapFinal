# Use an official Alpine-based PostgreSQL image from the Docker Hub
FROM postgres:alpine

# Set environment variables for PostgreSQL
ENV POSTGRES_PASSWORD password

# Copy the initialization script into the container
COPY init.sql /docker-entrypoint-initdb.d/

# Expose PostgreSQL port (this is optional as it's already exposed by default)
EXPOSE 5432

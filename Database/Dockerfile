# Utiliza uma imagem PostgreSQL baseada em Alpine
FROM postgres:alpine

# Define a senha do PostgreSQL
ENV POSTGRES_PASSWORD password

# Copia script de inicialização
COPY init.sql /docker-entrypoint-initdb.d/

# Exporta porta padrão do PostgreSQL
EXPOSE 5432




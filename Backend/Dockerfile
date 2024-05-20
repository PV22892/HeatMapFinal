# Usa a imagem base do Node.js Alpine Linux
FROM node:alpine

# Define o diretório de trabalho dentro do conteiner
WORKDIR /src/app

# Copia o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala apenas as dependências de produção
RUN npm install --production

# Copia o restante do código da aplicação para o diretório de trabalho
COPY . .

# Comando para executar a aplicação quando o conteiner é iniciado
CMD ["node", "src/app.js"]


# Imagem base oficial do Node (versão LTS, leve)
FROM node:22-alpine

# Pasta de trabalho dentro do container
WORKDIR /app

# Copia apenas os manifestos primeiro (melhor uso de cache de build)
COPY package*.json ./

# Instala apenas as dependências de produção
RUN npm install --omit=dev

# Copia o restante do código da aplicação
COPY . .

# Porta exposta pela aplicação
EXPOSE 5000

# Comando que inicia a API
CMD ["node", "server.js"]

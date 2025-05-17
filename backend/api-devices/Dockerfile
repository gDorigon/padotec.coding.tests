# Usa uma imagem oficial do Node.js
FROM node:18

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta da API
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]

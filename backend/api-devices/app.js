require('./config/db');


// Importando o módulo express para lidar com rotas e middlewares
const express = require('express');

// Inicializando a aplicação Express
const app = express();
const deviceRoutes = require('./routes/deviceRouter');

// Definindo a porta em que o servidor irá escutar
const PORT = process.env.PORT || 3000;

// Configurando as rotas da aplicação para utilizar as rotas dos dispositivos
app.use(express.json());

app.use('/api', deviceRoutes);

// Inicializando o servidor e fazendo com que ele escute na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
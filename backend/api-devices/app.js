// Importando os módulos necessários
const express = require('express');
const mongoose = require('mongoose');
const deviceRoutes = require('./routes/deviceRouter');

// Inicializando o app Express
const app = express();

// Conexão com o MongoDB
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/devicesdb';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('### SERVIDOR CONECTADO'))
    .catch((err) => console.error('### ERRO:', err));

// Middlewares
app.use(express.json());

// Rotas
app.use('/api', deviceRoutes);

// Porta de escuta
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`### SERVIDOR NA PORTA ${PORT}`);
});

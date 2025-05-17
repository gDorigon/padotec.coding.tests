const express = require('express');
const mongoose = require('mongoose');
const deviceRoutes = require('./routes/deviceRouter');

const app = express();

// Middleware para ler JSON
app.use(express.json());



// Conectando ao MongoDB (usa variável de ambiente ou localhost)
const uri = process.env.MONGODB_URI || 'mongodb+srv://user01:user0123@cluster0.o2aas58.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ MongoDB conectado com sucesso'))
    .catch((err) => console.error('❌ Erro ao conectar ao MongoDB:', err));

// Rotas
app.use('/api', deviceRoutes);

// Inicializa o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

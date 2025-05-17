const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/devicesdb';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB conectado com sucesso'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = mongoose;

const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    deviceId: Number,
    name: String,
    mac: String,
    email: String,
    timestamp: Number
}, {
    versionKey: false
});


module.exports = mongoose.model('Device', deviceSchema);


// Estrutura do dispositivo para o banco de dados

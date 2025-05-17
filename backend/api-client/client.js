const axios = require('axios');
const URL_BASE = 'http://localhost:3000/api';

// Listar todos dispositivos
async function listaDevices() {
    try {
        const response = await axios.get(`${URL_BASE}/listar`);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter dispositivos:', error.message);
        return null;
    }
}

// Buscar dispositivo por id
async function listaDeviceId(id) {
    try {
        const response = await axios.get(`${URL_BASE}/listar/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao obter dispositivo do id ${id}:`, error.message);
        return null;
    }
}

// cria novo dispositivo
async function criaDevices(dadosDevice) {
    try {
        const response = await axios.post(`${URL_BASE}/registrar`, dadosDevice);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar dispositivo:', error.message);
        return null;
    }
}

module.exports = {
    listaDevices,
    listaDeviceId,
    criaDevices,
};

const Device = require('../models/Device');

// Função para listar todos os devices
const listaDevices = async (req, res) => {
    const devices = await Device.find(); // Busca todos os devices no MongoDB
    res.json(devices); // Retorna os devices
};

// Função para criar um novo device
const criaDevices = async (req, res) => {
    const { name, mac, email, timestamp } = req.body; // pega os campos da requisição

    // Faz a verificação se o mac já existe 
    const macExistente = await Device.findOne({ mac });
    if (macExistente) {
        return res.status(400).json({ erro: 'Já existe um dispositivo com esse MAC address.' });
    }

    const timestampEpoch = timestamp // conversão timestamp
        ? Math.floor(new Date(timestamp).getTime() / 1000) // Se o timestamp foi enviado
        : Math.floor(Date.now() / 1000); // Caso contrário, usa o horário atual


    // verifica o ultimo device do banco em ordem decrescente 
    const ultimoDevice = await Device.findOne().sort({ deviceId: -1 });

    // pega o valor do ultimo id do banco e adiciona +1
    const proximoId = ultimoDevice?.deviceId ? ultimoDevice.deviceId + 1 : 1;

    // cria o modelo do device
    const novoDevice = new Device({
        deviceId: proximoId,
        name,
        mac,
        email,
        timestamp: timestampEpoch
    });

    // coloca o novo device no banco de dados
    try {
        const device = await novoDevice.save();
        console.log('✅ Device salvo:', device);
        res.status(201).json({ deviceId: device.deviceId, mac: device.mac });
    } catch (error) {
        console.error('❌ Erro ao salvar no MongoDB:', error);
        res.status(500).json({ erro: 'Erro ao salvar dispositivo.' });
    }

};


// Função para buscar um device por ID
const listaDeviceId = async (req, res) => {
    const { id } = req.params; // Pega o /id da url, que é o parametro da requisição

    const deviceId = parseInt(id); // converte em interiro caso venha um valor diferente


    if (isNaN(deviceId)) {
        return res.status(400).json({ erro: 'ID inválido' });
    } // Verifica se o id é valido, se nao for, retorna 400

    const device = await Device.findOne({ deviceId }); // verifica se o id existe no banco de dados e busca ele

    if (!device) {
        return res.status(404).json({ erro: 'Dispositivo não encontrado' });
    } // Se nao encontrar o device, retorna 400


    res.json(device); // caso encontre, retorna o dispositivo em json
};



module.exports = { listaDevices, criaDevices, listaDeviceId };

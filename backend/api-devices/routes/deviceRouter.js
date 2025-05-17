const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

router.get('/listar', deviceController.listaDevices);
router.get('/listar/:id', deviceController.listaDeviceId);
router.post('/registrar', deviceController.criaDevices);

module.exports = router;

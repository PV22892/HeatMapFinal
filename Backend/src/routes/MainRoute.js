const express = require('express');
const router = express.Router();
const main = require('../controllers/MainController');

//Tabela realestatedata//
router.get('/listData', main.listData); // Retorna todos os dados
router.get('/listByLocation', main.listByLocation); // Retorna todos os dados naquela localização
router.get('/maxPrice', main.maxPrice); // Retorna preço maximo e minimo naquela localização
router.get('/get/:id', main.get); // Retorna dados da localização com base no ID

//Tabela locations//
router.get('/listLocations',main.listLocations) // Retorna todos os dados
router.get('/getLocation',main.getLocation) // Retorna todos os dados naquela localização
router.get('/getCoordenates',main.getCoordenates) // Retorna coordenadas naquela localização

module.exports = router;

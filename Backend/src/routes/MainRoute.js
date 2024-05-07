const express = require('express');
const router = express.Router();
const main = require('../controllers/MainController');

router.get('/listData', main.listData);
router.get('/listByLocation', main.listByLocation);
router.get('/maxPrice', main.maxPrice);
router.get('/get/:id', main.get);


router.get('/listLocations',main.listLocations)
router.get('/getLocation',main.getLocation)
router.get('/getCoordenates',main.getCoordenates)

module.exports = router;

var {realestatedata, locations} = require('../model/MainModel');
const { Sequelize } = require('sequelize');
const controllers = {};

controllers.listData = async (req, res) => {
    try {
        // Tenta adquirir todos os dados da tabela 'realestatedata'
        const data = await realestatedata.findAll({
            // Ordena os dados por 'id' em ordem ascendente.
            order: [
                ["id", "ASC"],
            ]
        });
        // Se for bem-sucedido, responde com um objeto JSON contendo os dados adquiridos.
        res.json({ success: true, data: data });
    } catch (error) {
        // Se ocorrer um erro a adquirir os dados, responde com um código de status 500.
        // e uma mensagem de erro descrevendo o problema.
        res.status(500).json({ success: false, error: error.message });
    }
};


controllers.listByLocation = async (req, res) => {
    const { location, type } = req.query;
    try {
        // Tenta adquirir todos os dados da tabela 'realestatedata'.
        const data = await realestatedata.findAll({
            // Filtra os dados pela Localização e Tipo.
            where: {
                [Sequelize.Op.and]: [
                    // Procura por localizações que contenham a string de entrada.
                    { location: { [Sequelize.Op.like]: `%${location}%` } }, 
                    
                    { type: type } // Filtra pelo tipo especificado.
                ]
            },
            // Ordena os dados por 'id' em ordem ascendente.
            order: [
                ["id", "ASC"],
            ]
        });
         // Se for bem-sucedido, responde com um objeto JSON contendo os dados adquiridos.
        res.json({ success: true, data: data });
    } catch (error) {
        // Se ocorrer um erro durante a aquisição dos dados, responde com um código de status 500.
        // e uma mensagem de erro descrevendo o problema.
        res.status(500).json({ success: false, error: error.message });
    }
};


controllers.maxPrice = async (req, res) => {
    const { location, type } = req.query;
    try {
        const maxPrice = await realestatedata.max('price', {
            where: {
                [Sequelize.Op.and]: [
                    { location: { [Sequelize.Op.like]: `%${location}%` } }, // Search for location containing the input string
                    { type: type } // Filter by the specified type
                ]
            }
        });

        const minPrice = await realestatedata.min('price', {
            where: {
                [Sequelize.Op.and]: [
                    { location: { [Sequelize.Op.like]: `%${location}%` } }, // Search for location containing the input string
                    { type: type } // Filter by the specified type
                ]
            }
        });

        res.json({ success: true, maxPrice: maxPrice, minPrice: minPrice });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

controllers.get = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await realestatedata.findByPk(id);
        res.json({ success: true, data: data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

controllers.listLocations = async (req, res) => {
    try {
        const data = await locations.findAll({
            attributes: ['name'],
            order: [
                ["name", "ASC"]
            ]
        });
        res.json({ success: true, locations: data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

controllers.getLocation = async (req, res) => {
    const { location } = req.query;
    try {
        const data = await locations.findAll({
            where: {
                name: { [Sequelize.Op.like]: `%${location}%` } // Search for location containing the input string
            },
            order: [
                ["id", "ASC"]
            ]
        });
        res.json({ success: true, data: data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
controllers.getCoordenates = async (req, res) => {
    const { location } = req.query;
    try {
        const data = await locations.findAll({
            attributes: ['coordinates'],
            where: {
                name: { [Sequelize.Op.like]: `%${location}%` } // Search for location containing the input string
            },
            order: [
                ["id", "ASC"]
            ]
        });
        res.json({ success: true, data: data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = controllers;

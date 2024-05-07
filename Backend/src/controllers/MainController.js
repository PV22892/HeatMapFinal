var {realestatedata, locations} = require('../model/MainModel');
const { Sequelize } = require('sequelize');
const controllers = {};

controllers.listData = async (req, res) => {
    try {
        const data = await realestatedata.findAll({
            order: [
                ["id", "ASC"],
            ]
        });
        res.json({ success: true, data: data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

controllers.listByLocation = async (req, res) => {
    const { location, type } = req.query;
    try {
        const data = await realestatedata.findAll({
            where: {
                [Sequelize.Op.and]: [
                    { location: { [Sequelize.Op.like]: `%${location}%` } }, // Search for location containing the input string
                    { type: type } // Filter by the specified type
                ]
            },
            order: [
                ["id", "ASC"],
            ]
        });
        res.json({ success: true, data: data });
    } catch (error) {
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

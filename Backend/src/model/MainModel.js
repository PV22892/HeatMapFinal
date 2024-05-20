const Sequelize = require('sequelize');
const sequelize = require('./database');

// Define um modelo chamado 'realestatedata' para representar os dados imobiliários
const realestatedata = sequelize.define('realestatedata', {
    // ID único para cada entrada, autoincrementado
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    // Nome do imóvel
    name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    // Preço do imóvel
    price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    // Tipo do negócio imobiliário (venda ou arrendamento)
    type: {
        type: Sequelize.ENUM('venda', 'arrendar'),
        allowNull: false
    },
    // Localização do imóvel
    location: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    // Coordenadas geográficas do imóvel
    coordinates: {
        type: Sequelize.GEOMETRY('POINT'),
        allowNull: true
    }
}, {
    timestamps: false
});


const locations = sequelize.define('locations', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    coordinates: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = {
    realestatedata: realestatedata,
    locations: locations
};

const Sequelize = require('sequelize');
const db = require('../config/database');

const Verbs = db.define('verb', {
    infinitive: {
        type: Sequelize.STRING
    },
    tempus: {
        type: Sequelize.STRING
    },
    person: {
        type: Sequelize.SMALLINT
    },
    numerus: {
        type: Sequelize.STRING
    },
    modus: {
        type: Sequelize.STRING
    },
    form: {
        type: Sequelize.STRING
    }

});



module.exports = Verbs;
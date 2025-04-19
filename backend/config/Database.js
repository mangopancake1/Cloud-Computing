import {Sequelize} from "sequelize";

const db = new Sequelize('RECOVER_YOUR_DATA','root','', {
    host: '34.67.189.246',
    dialect: 'mysql',
    logging: false, 
});

export default db;

import Sequelize from 'sequelize';

let database = "m7_ejemplo_sequalize"
let usuario = "postgres"
let password = "123456"

const sequelize = new Sequelize(database, usuario, password, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 5000
      }
  });

  export default sequelize;
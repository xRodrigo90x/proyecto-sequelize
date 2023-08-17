
import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const Usuario = sequelize.define('Usuarios', {

    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    apellido: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
        }

    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: true,
        },

    }

}, {
    timestamps: true
});

export default Usuario;
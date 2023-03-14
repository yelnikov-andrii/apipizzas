import { sequelize } from "../utils/db.js";
import { DataTypes } from 'sequelize';

export const User = sequelize.define('user', {
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activationToken: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});

User.sync();
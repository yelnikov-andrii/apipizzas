import { sequelize } from "../utils/db.js";
import { DataTypes } from 'sequelize';

export const Call = sequelize.define('call', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  // Other model options go here
});

Call.sync();
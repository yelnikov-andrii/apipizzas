import { sequelize } from "../utils/db.js";
import { DataTypes } from 'sequelize';

export const Order = sequelize.define('order', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
  },
  products: {
    type: DataTypes.STRING,
    allowNull: false
  },
    email: {
      type: DataTypes.STRING,
    }
}, {
  // Other model options go here
});

Order.sync();
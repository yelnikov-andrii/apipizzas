import { sequelize } from "../utils/db.js";
import { DataTypes } from 'sequelize';

export const Feedback = sequelize.define('feedback', {
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
  email: {
    type: DataTypes.STRING,
  },
  message: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});

Feedback.sync();
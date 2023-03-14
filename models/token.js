import { sequelize } from "../utils/db.js";
import { DataTypes } from 'sequelize';
import { User } from "./user.js";

export const Token = sequelize.define('token', {
  // Model attributes are defined here
  refreshToken: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER
  }
}, {
  // Other model options go here
});

Token.sync();
User.hasOne(Token);
Token.belongsTo(User);

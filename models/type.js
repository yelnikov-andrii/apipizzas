import { sequelize } from "../utils/db.js";
import { DataTypes } from 'sequelize';
import { Product } from "./product.js";

export const Type = sequelize.define('type', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  // Other model options go here
});

Type.sync();

Type.hasMany(Product);
Product.belongsTo(Type);
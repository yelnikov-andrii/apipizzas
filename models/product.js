import { sequelize } from "../utils/db.js";
import { DataTypes } from 'sequelize';
import { Type } from "./type.js";

export const Product = sequelize.define('product', {
  // Model attributes are defined here
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER
  },
  count: {
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  components: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.INTEGER
  },
  prices: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
  },
  sizes: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
  },
  souses: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  dough: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  categories: {
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  typeId: {
    type: DataTypes.INTEGER
  }
}, {
  // Other model options go here
});

Product.sync();
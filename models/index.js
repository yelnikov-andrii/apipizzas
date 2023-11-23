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
  },
}, {
  // Other model options go here
});

Call.sync();

export const Feedback = sequelize.define('feedback', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
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

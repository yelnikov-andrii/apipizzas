import { Product } from '../models/product.js';
import { productService } from '../services/productService.js';
import { Op } from 'sequelize';

const create = async (req, res) => {
  const { name, components, prices, sizes, souses, categories, dough, img, price, count, weight, typeId } = req.body;

  await productService.create({ name, components, prices, sizes, souses, categories, dough, img, price, count, weight, typeId });

  res.statusCode = 201;
  res.send({ name, components, prices, sizes, souses, categories, dough, img, price, count, weight });
};

async function getProducts(req, res) {
  let { typeId, count, page, limit, category } = req.query;
  let products;
  if (typeId) {
    products = await Product.findAll({
      where: {
        typeId
      }
    });
  } else {
    products = await Product.findAll();
  }

  if (count) {
    products = products.slice(0, count);
    res.send(products);
    return;
  }

  if (!count) {
    if (category) {
      const productsByCategory = await Product.findAll({where: {
        categories: {
          [Op.contains]: [category]
        }
      }});

      if (!page && !limit) {
        res.send(productsByCategory);
        return;
      }
        
        const totalCount = productsByCategory.length;
        const firstItem = page * limit - limit;
        const lastItem = page * limit;
        const productsToSend = productsByCategory.slice(firstItem, lastItem);
        res.send({totalCount, data: productsToSend, page});
        return;
    }
    
    if (!page && !limit) {
      res.send(products);
      return;
    }

    const totalCount = products.length;
    const firstItem = page * limit - limit;
    const lastItem = page * limit;
    const productsToSend = products.slice(firstItem, lastItem);
    res.send({totalCount, data: productsToSend, page});
    return;
  }
}

async function getOne(req, res) {
  const { id } = req.params;
  const product = await Product.findOne({where: {
    id
  }});
  res.send(product);
}

export const productsController = {
  create,
  getProducts,
  getOne
}
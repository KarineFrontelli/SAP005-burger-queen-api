/* eslint-disable camelcase */
// aqui vai o código que acessa o banco de dados
const database = require('../db/models');

class ProductsController {
  static async getAllProducts(req, res) {
    const product = await database.Products.findAll();
    return res.status(200).json(product);
  }

  static async getProductsById(req, res) {
    const { productid } = req.params;
    const product = await database.Users.findAll({
      where: {
        id: Number(productid),
      },
    });
    return res.status(200).json(product);
  }

  static async postNewProducts(req, res) {
    const newProduct = await database.Products.create(req.body);
    return res.status(200).json(newProduct);
  }

  static async putProductsbyId(req, res) {
    const { productid } = req.params;
    // o nome dessa const precisa ser igual ao req.param que passamos na rota!
    const product = await database.Products.findAll({
      where: {
        id: Number(productid),
      },
    });
    return res.status(200).json(product);
  }

  static async deleteProductsbyId(req, res) {
    const { productid } = req.params;
    const product = await database.Products.destroy({
      where: {
        id: Number(productid),
      },
    });
    return res.status(200).json(product);
  }
}
module.exports = ProductsController;

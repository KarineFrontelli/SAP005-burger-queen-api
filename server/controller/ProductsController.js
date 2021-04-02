const database = require('../db/models');

class ProductsController {

  static async getAllProducts(req, res) {
    const product = await database.Products.findAll();
    return res.status(200).json(product);
  }

  static async getProductsById(req, res) {
    const { productsid } = req.params;
    const product = await database.Products.findAll({
      where: {
        id: Number(productsid),
      },
    });
    return res.status(200).json(product);
  }

  static async postNewProducts(req, res) {
    const newProduct = await database.Products.create(req.body);
    return res.status(200).json(newProduct);
  }

  static async putProductsbyId(req, res) {
    const { productsid } = req.params;
    let productToUpdate = req.body;
    const product = await database.Products.update(productToUpdate, {
      where: {
        id: Number(productsid),
      },
    });
    return res.status(200).json("Update ok");
  }

  static async deleteProductsbyId(req, res) {
    const productid = req.params.productsid;
    const deletedProduct = await database.Products.destroy({
      where: {
        id: Number(productid),
      },
    });
    return res.status(200).json(deletedProduct);
  }
}

module.exports = ProductsController;

/*const database = require('../db/models');

class ProductService {
  static async getAllProduct() {
    try {
      return await database.Product.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getOrdersById() {
    try {
      return await database.Orders.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async postAllOrders() {
    try {
      return await database.Orders.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async putOrdersById(id, putOrdersById) {
    try {
      const orderToUpdate = await database.Orders.findOne({
        where: { id: Number(id) }
      });
      if (orderToUpdate) {
        await database.Orders.update(putOrdersById, { where: { id: Number(id) } });
        return putOrdersById;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async deleteOrderById() {
    try {
      return await database.Orders.findAll();
    } catch (error) {
      throw error;
    }
  }
}
module.exports = ProductService;*/
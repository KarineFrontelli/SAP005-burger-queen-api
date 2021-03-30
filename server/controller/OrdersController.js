// aqui vai o código que acessa o banco de dados
const database = require('../db/models');

class OrdersController {
  static async getAllOrders(req, res) {
    const order = await database.Orders.findAll();
    return res.status(200).json(order);
  }

  static async getOrdersById(req, res) {
    const { orderid } = req.params;
    const order = await database.Orders.findAll({
      where: {
        id: Number(orderid),
      },
    });
    return res.status(200).json(order);
  }

  static async postAllOrders(req, res) {
    const newOrder = await database.Orders.create(req.body);
    return res.status(200).json(newOrder);
  }

  static async putOrdersById(req, res) {
    const { orderId } = req.params;
    const order = await database.Orders.findAll({
      where: {
        id: Number(orderId),
      },
    });
    return res.status(200).json(order);
  }

  static async deletedOrdersById(req, res) {
    const orderid = req.params.orderid;
    const deletedOrder = await database.Orders.destroy({
      where: {
        id: Number(orderid),
      },
    });
    return res.status(200).json(deletedOrder);
  }
}

module.exports = OrdersController;
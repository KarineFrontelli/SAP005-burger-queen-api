/*const database = require('../db/models');

class UsersService {
  static async getAllUsers() {
    try {
      return await database.Users.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async getUsersById() {
    try {
      return await database.Orders.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async postAllUsers() {
    try {
      return await database.Orders.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async putUsersById(userid, putUsersById) {
    try {
      const UserToUpdate = await database.Orders.findOne({
        where: { id: Number(userid) }
      });
      if (UserToUpdate) {
        await database.Orders.update(putUsersById, { where: { id: Number(userid) } });
        return putUsersById;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  /*static async deleteOrderById() {
    try {
      return await database.Orders.findAll();
    } catch (error) {
      throw error;
    }
  }
}
module.exports = UsersService;*/
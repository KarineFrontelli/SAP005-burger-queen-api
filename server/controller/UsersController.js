const database = require('../db/models');

class UsersController {

  static async getAllUsers(req, res) {
    const user = await database.Users.findAll();
    return res.status(200).json(user);
  }

  static async getUsersById(req, res) {
    const { uid } = req.params;
    const user = await database.Users.findAll({
      where: {
        id: Number(uid),
      },
    });
    return res.status(200).json(user);
  }

  static async postNewUsers(req, res) {
    const newUser = await database.Users.create(req.body);
    return res.status(200).json(newUser);
  }

  static async putUsersById(req, res) {
    let userToUpdate = req.body;
    const { uid } = req.params;
    let user = await database.Users.update(
      userToUpdate,
      {
        where: {
          id: Number(uid)
        }
      })
    return res.json("Update ok");
  }

  static async deleteUserById(req, res) {
    const { uid } = req.params;
    const deleteduser = await database.Users.destroy({
      where: {
        id: Number(uid),
      },
    });
    return res.status(200).json(deleteduser);
  }
}

module.exports = UsersController;

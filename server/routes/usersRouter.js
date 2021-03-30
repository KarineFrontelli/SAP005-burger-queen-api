const { Router } = require('express')
const UsersController = require('../controller/UsersController')

const router = Router()

// aqui vai as requisições
router.get("/", UsersController.getAllUsers)
router.get("/:uid", UsersController.getUsersById)
router.post("/", UsersController.postNewUsers)
router.put("/:uid", UsersController.putUsersById)
router.delete("/:uid", UsersController.deleteUserById)

module.exports = router
const userController = require("../controllers/userController.js");

const router = require("express").Router();

//register
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/refresh", userController.requestRefreshToken);

module.exports = router;

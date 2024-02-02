const UserModel = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const client = require("../config/InitRedis.js");
const { use } = require("../routers/user.js");
let refreshTokens = [];
const userController = {
  //ACCESS_TOKEN
  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_ACCESS_KEY,
      { expiresIn: "30s" }
    );
  },
  //REFRESH_TOKEN
  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_REFRESH_KEY,
      { expiresIn: "30d" }
    );
  },
  //Register
  register: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      //create new user
      const newUser = {
        username: req.body.username,
        password: hashed,
        fullname: req.body.fullname,
        email: req.body.email,
      };
      UserModel.register(newUser, (err, user) => {
        if (err) {
          res.send(false);
          console.log("loi");
        } else {
          console.log("REGISTER SUCCESSFUL");
          res.send(true);
        }
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Login
  login: async function (req, res) {
    try {
      const SUser = req.body.username;
      UserModel.login(SUser, async (err, user) => {
        if (err) {
          res.send(err || "Username Error");
          console.log("Username Error");
        } else {
          if (user?.username == undefined) {
            console.log("Username not exit");
            res.send("1");
          } else {
            console.log("Username exists");
            const validPassword = await bcrypt.compare(
              req.body.password,
              user.password
            );
            if (!validPassword) {
              console.log("Password Error");
              res.send("2");
            } else {
              console.log("Login Success");
              //accessToken d
              const accessToken = userController.generateAccessToken(user);
              //refresh token
              const refreshToken = userController.generateRefreshToken(user);
              refreshTokens.push(refreshToken);
              //Đẩy refresh token vào httpOnly Cookie
              res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "Strict",
              });
              res.status(200).send({ user, accessToken });
            }
          }
        }
      });
    } catch (err) {
      res.status(500).send("K truy cap duoc");
    }
  },

  requestRefreshToken: async (req, res) => {
    //lấy refresh token từ cookie
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).send("Nguoi dung chua dang nhap");
    }
    if (!refreshTokens.includes(refreshToken)) {
      return res.status(403).json("Refresh token is not valid");
    }
    jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
      if (err) {
        res.send(err);
      }
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
      //Thêm mới accessToken và Refresh Token
      const newAccessToken = userController.generateAccessToken(user);
      const newRefreshToken = userController.generateRefreshToken(user);
      refreshTokens.push(newRefreshToken);
      //Đẩy refresh token vào httpOnly Cookie
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "Strict",
      });
      res.status(200).json({ accessToken: newAccessToken });
    });
  },
  userLogout: async (req, res) => {
    res.clearCookie("refreshToken");
    refreshTokens = refreshTokens.filter(
      (token) => token !== req.cookies.refreshToken
    );
    res.status(200).send("Loggout");
  },
};

module.exports = userController;

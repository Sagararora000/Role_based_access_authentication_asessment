const express = require("express");
const router = express.Router();
const passport = require("passport");
const usersController = require("../controllers/users_controller");

router.get("/signup", usersController.signUp);
router.post("/create", usersController.create);
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/" }),
  usersController.createSession
);

router.get("/log-out",usersController.destroySession);
return (module.exports = router);

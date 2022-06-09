const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");

router.use(fileUpload());

router.route("/").get((req, res) => {
  res.send("Hello World! This is CD77");
});

module.exports = router;

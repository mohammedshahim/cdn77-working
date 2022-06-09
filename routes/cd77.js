const express = require("express");
const router = express.Router();
const { postApi } = require("../controllers/cd77");
const fileUpload = require("express-fileupload");

router.use(fileUpload());

router.route("/").post(postApi);

module.exports = router;

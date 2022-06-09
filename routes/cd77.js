const express = require("express");
const router = express.Router();
const { getApi } = require("../controllers/cd77");
const fileUpload = require("express-fileupload");

router.use(fileUpload());

router.route("/").get(getApi);

module.exports = router;

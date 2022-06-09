const express = require("express");
const app = express();
require("dotenv").config();

const cd77Route = require("./routes/cd77");

app.use("/api", cd77Route);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on port ${process.env.PORT || 5000}`);
});

// required
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-sessions");
const massive = require("massive");
const app = express();
const cntrl = require("./productsCntrl");

// db connection
// console.log(process.env.CONNECTION_STRING);
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    // console.log(dbInstance);
    app.set("db", dbInstance);
  })
  .catch(console.log);

// middleware
app.use(json());
app.use(cors());

// endpoints
app.get(`/api/products`, cntrl.getProducts);

// listening
const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`here 4 u @ ${port}`);
});

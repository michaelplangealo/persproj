// required
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const prodCntrl = require("./productsCntrl");
const cartCntrl = require("./cartCntrl");
const passport = require("passport");
const { strategy } = require(`${__dirname}/loginCntrl.js`);
// stripe requirements
const SERVER_CONFIGS = require(`${__dirname}/constants/server`);
const configureServer = require(`./server`);
const configureRoutes = require(`./routes/index.js`);

// db connection
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    // console.log(dbInstance);
    app.set("db", dbInstance);
  })
  .catch(console.log);

const app = express();
app.use(express.static(`${__dirname}/../build`));

// session creation
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000
    }
  })
);

// middleware
app.use(json());
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);
configureServer(app);
configureRoutes(app);

passport.serializeUser((user, done) => {
  // console.log(user);

  app
    .get("db")
    .getCustomer(user.id)
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .addCustomer([user.displayName, user.id])
          .then(res => {
            return done(null, res[0]);
          })
          .catch(err => console.log(err));
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => console.log(err));
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// authentication endpoints
app.get(
  `/login`,
  passport.authenticate(`auth0`, {
    successRedirect: `http://localhost:3000/#/`,
    failureRedirect: "http://localhost:3005/login"

    // successRedirect: `/`,
    // failureRedirect: "/login"
  })
);

// products endpoints
app.get(`/api/products`, prodCntrl.getProducts);
app.get(`/api/products/:id`, prodCntrl.getOneProduct);
app.get(`/api/products`, prodCntrl.filterProduct);

// cart endpoints
app.get(`/api/cart`, cartCntrl.getCart);
app.post(`/api/cart/`, cartCntrl.addToCart);
app.delete(`/api/cart/:id`, cartCntrl.deleteFromCart);
app.put(`/api/cart`, cartCntrl.updateCart);

const path = require("path");
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/../build/index.html"));
});
// listening
const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`here 4 u @ ${port}`);
});

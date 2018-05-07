const configureStripe = require("stripe");

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === "production"
    ? "sk_test_dNQ30iGmbuKg9lujyQjBxkPI"
    : "sk_test_dNQ30iGmbuKg9lujyQjBxkPI";

// replaced sk-live_MY_SECRET_KEY with sk_test_dNQ30iGmbuKg9lujyQjBxkPI

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;

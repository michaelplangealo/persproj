const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === "production"
    ? "pk_live_MY_PUBLISHABLE_KEY"
    : "pk_test_HCNR31VaUZ3mwAro17figVEG";

export default STRIPE_PUBLISHABLE;

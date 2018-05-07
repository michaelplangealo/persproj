const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === "production"
    ? "pk_test_HCNR31VaUZ3mwAro17figVEG"
    : "pk_test_HCNR31VaUZ3mwAro17figVEG";

export default STRIPE_PUBLISHABLE;

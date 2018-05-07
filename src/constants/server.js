const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "/complete"
    : "http://localhost:3005/complete";

export default PAYMENT_SERVER_URL;

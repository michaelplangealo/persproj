let totalPrice = [];

module.exports = {
  getCart: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance.getCart(req.user.id).then(response => {
      // console.log(response);
      res.status(200).json(response);
    });
  },
  addToCart: (req, res, next) => {
    const dbInstance = req.app.get("db");
    // console.log(req.user);
    dbInstance
      .addToCart([req.user.id, req.body.id, req.body.quantity])
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json(err));
  },
  deleteFromCart: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .deleteFromCart([req.params.id, req.user.id])
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json(err));
  },
  updateCart: (req, res, next) => {
    console.log(typeof req.body.quantity);
    const dbInstance = req.app.get("db");
    dbInstance
      .updateQuantity([req.body.id, req.user.id, req.body.quantity])
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json(err));
  },
  getCartItem: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getCartItem(req.params.id)
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json(err));
  }
};

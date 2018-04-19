module.exports = {
  getCart: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance.getCart(req.user.id).then(response => {
      res.status(200).json(response);
    });
  },
  addToCart: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .addToCart([req.user.id, req.params.id])
      .then(response => getCart(req, res))
      .catch(err => res.status(500).json(err));
  }
};

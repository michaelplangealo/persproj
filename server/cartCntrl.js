module.exports = {
  getCart: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance.getCart(req.user.id).then(response => {
      res.status(200).json(response);
    });
  },
  addToCart: (req, res, next) => {
    const dbInstance = req.app.get("db");
    // console.log(req.user);
    dbInstance
      .addToCart([req.params.id, req.user.id])
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json(err));
  },
  deleteFromCart: (req, res, next) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .deleteFromCart([req.params.id, req.user.id])
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json(err));
  }
};

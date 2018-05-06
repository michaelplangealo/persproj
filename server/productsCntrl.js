module.exports = {
  getProducts: (req, res, next) => {
    const dbInstance = req.app.get("db");
    // const {
    //   id,
    //   name,
    //   firstimg,
    //   secondimg,
    //   thirdimg,
    //   description,
    //   price
    // } = req.body;
    // console.log(req);
    // console.log(req.params);

    dbInstance
      .getProducts()
      .then(response => {
        // console.log(req.body);
        res.status(200).json(response);
      })
      .catch(err => res.status(500).json(err));
  },
  getOneProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");
    // console.log(req.params.id);

    dbInstance
      .getProductById([req.params.id])
      .then(response => {
        // console.log(req.params.id);

        res.status(200).json(response);
      })
      .catch(err => res.status(500).json(err));
  },
  filterProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .sortByCategory([req.body.category])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => res.status(500).json(err));
  }
};

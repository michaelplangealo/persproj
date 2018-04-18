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
        // console.log(response);
        res.status(200).json(response);
      })
      .catch(console.log);
  },
  getOneProduct: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .getProductById([req.params.id])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(console.log);
  }
};

module.exports = {
  getProducts: (req, res, next) => {
    const dbInstance = req.app.get("db");
    // const {
    //   name,
    //   firstimg,
    //   secondimg,
    //   thirdimg,
    //   description,
    //   price
    // } = req.body;
    // console.log(req);
    
    dbInstance
      .get_products()
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(console.log);
  }
};

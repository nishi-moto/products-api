const db = require('./db');

const getProducts = async (req, res) => {
  const products = await db.getProductsDB();
  res
    .json(products)
    .status(200)
    .end();
};

const createProduct = (req, res) => {
  db.createProductDB(req.body);
  res
    .json(req.body)
    .status(201)
    .end();
};

const updateProduct = async (req, res) => {
  const product = await db.updateProductDB(req.body, req.params.id);
  res
    .json(product)
    .status(200)
    .end();
};

const getProductById = async (req, res) => {
  const product = await db.getProductByIdDB(req.params.id);
  res
    .json(product)
    .status(200)
    .end();
};

const deleteProduct = async (req, res) => {
  const product = await db.deleteProductDB(req.params.id);
  res
    .json(product)
    .status(200)
    .end();
};


module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  getProductById,
  deleteProduct,
};

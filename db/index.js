const { Pool } = require('pg');

const db = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres123',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const getProducts = async () => {
  await db.connect();
  const res = await db.query('SELECT p.name, p.description, p.price, pg.name AS product_group FROM products AS p INNER JOIN product_groups AS pg ON p.product_group_id = pg.id;');
  return res.rows;
};

const createProduct = async data => {
  await db.connect();
  const res = await db.query('INSERT INTO products (name, description, price, product_group_id) VALUES ($1, $2, $3, (SELECT id FROM product_groups WHERE name = $4));', [data.name, data.description, data.price, data.productGroup]);
  return res;
};

const updateProduct = async (data, id) => {
  await db.connect();
  const productGroupId = await db.query('SELECT id FROM product_groups WHERE name = $1', [data.product_group]);
  const res = await db.query('UPDATE products SET name = $1, description = $2, price = $3, product_group_id = $4 WHERE id = $5;', [data.name, data.description, data.price, productGroupId.rows[0].id, id]);
  return res;
};


const getProductById = async id => {
  await db.connect();
  const res = await db.query('SELECT p.name, p.description, p.price, pg.name AS product_group FROM products AS p INNER JOIN product_groups AS pg ON p.product_group_id = pg.id WHERE p.id = $1;', [id]);
  return res.rows[0];
};

const deleteProduct = async id => {
  await db.connect();
  const res = await db.query('DELETE FROM products WHERE id = $1;', [id]);
  return res.rows;
};


module.exports = {
  getProductsDB: getProducts,
  createProductDB: createProduct,
  updateProductDB: updateProduct,
  getProductByIdDB: getProductById,
  deleteProductDB: deleteProduct,
};

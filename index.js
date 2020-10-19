const express = require('express');
const bodyParser = require('body-parser');
const products = require('./controllers/products');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/products', products.getProducts);
app.get('/api/products/:id', products.getProductById);
app.post('/api/products', products.createProduct);
app.put('/api/products/:id', products.updateProduct);
app.delete('/api/products/:id', products.deleteProduct);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));

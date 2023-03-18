const express = require('express')
const app = express()
const { products } = require('./data')

const { products } = require('./data');
// const path = require('path');

// app.use(express.static('./public'));

app.get('/', (req, res) => {
  // res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
  res.status(200).send('<h1>Home</h1><br><a href="/api/products">Products</a><br><a href="/api/products/filtered">Products Filtered</a>');
});

app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});
app.get('/api/products/filtered', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.status(200).json(newProducts);
});
app.get('/api/products/url/:productId', (req, res) => {
  const { productId } = req.params;
  const newProduct = products.find((product) => product.id === Number(productId));

  if (!newProduct) {
    res.status(404).send('Product doesn\'t exists');
  }
  res.status(200).json(newProduct);
});

app.get('/api/products/:productId/reviews/:reviewsId', (req, res) => {
  console.log(req.params);
  res.send('Hello world');
});

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => product.name.includes(search));
    // sortedProducts = sortedProducts.filter((product) => product.name.startsWith(search));
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  return res.status(200).json(sortedProducts);
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found<h1>');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

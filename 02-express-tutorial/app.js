const path = require('path');

const {products} = require('./data')

const express = require('express');

const app = express();

// setup static middleware
// app.use(express.static('./public'));

// app.get

//using json approach

app.get('/',(req, res)=>{
  // return res.json({"Header":"Content Header", "Body":"Content Body"});
  // return res.json(products)
  res.send('<h1>Home Page</h1><a href="/api/products"> Products</a>')
})

app.get('/api/products', (req, res)=>{
  const newProducts = products.map(p=>{
    const {id, desc, price} = p
    return {id, desc, price}
  });
  return res.json(newProducts);
})

// Using SSR approach

//First method, just leaving the index.html file inside of express.static folder.

// Second method to load all static files. Usinf middleware express.static
// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });

// third method to browse all static files. One by One
// app.get('/', (req, res)=>{
//   res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// });
// app.get('/styles.css', (req, res)=>{
//   res.status(200).sendFile(path.resolve(__dirname, './navbar-app/styles.css'));
// });
// app.get('/logo.svg', (req, res)=>{
//   res.status(200).sendFile(path.resolve(__dirname, './navbar-app/logo.svg'));
// });
// app.get('/browser-app.js', (req, res)=>{
//   res.status(200).sendFile(path.resolve(__dirname, './navbar-app/browser-app.js'));
// });

app.get('/about', (req, res) => {
  res.status(200).send('ABOUT');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1 style ="color: #f00";>Not Found</h1>');
});
// app.post
// app.put
// app.delete
// app.all
// app.use



// app.listen
app.listen(5000, ()=> console.log('starting the server'))
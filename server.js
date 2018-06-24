const cm = require('csv-mysql');
const express = require('express');

const product = require('./models/product');

const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
}) 

app.post('/list', function (req, res) {
  product.getProduct()
        .then(function (rows){
          res.json(rows)
        });
})

app.listen(3000)



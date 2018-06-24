const knex = require('../libs/db.js');

function getProduct(){
    return knex.select()
        .from('products')
        .limit(20)
}

module.exports = {
    getProduct:getProduct
}
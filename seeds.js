const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/AlbumShop', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!");
        console.log(err);
    })

// const p = new Product({
//     name :'MGK',
//     price: 20.99,
//     category: 'POP'
// })

// p.save().then(p =>{
//     console.log(p);
// })
// .catch(e => {
//     console.log(e);
// })

const seedProducts = [
    {
        name: 'MGK',
        price: 20.99,
        category:'POP'
    },
    {
        name: 'KENDRICK LARMAR',
        price: 20.99,
        category:'HIPPOP'
    },
    {
        name: 'PORTER ROBINSON',
        price: 20.99,
        category:'EDM'
    },
]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res);
})
.catch(e => {
    console.log(e);
})

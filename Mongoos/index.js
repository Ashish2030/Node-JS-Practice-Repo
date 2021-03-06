const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shoppingCart', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Connected to ShoppingCart DB");
})
.catch(err => {
    console.log("Error...");
    console.log(err);
});


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength:20
    },
    price: {
        type:Number
    },
    isOnSale: {
        type:Boolean
    },
    fuel: {
        diesel: {
            type:Boolean,
        }
    }
})

const Product = mongoose.model('Product', productSchema);

const mountainBike = new Product({ name: 'M BIKE', price: 1000000, isOnSale: true, 'fuel.diesel':true});

Product.insertMany([{ name: 'TOM BIKE', price: 1000000, isOnSale: true, 'fuel.diesel':true},{ name: 'TBIKE', price: 1000000, isOnSale: true, 'fuel.diesel':true}])
    .then(p => {
        console.log(p);
    })
    .catch(err => {
        console.log("SOMETHING WENT WRONG");
        console.log(err);
    })
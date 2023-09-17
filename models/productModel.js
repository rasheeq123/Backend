const {Schema, model} = require('../connection');

const myschema = new Schema({
    brand : String,
    model: String,
    playback: Number,
    price: Number,
    color : String,
    offer : Number 
});

module.exports = model('earbuds', myschema);
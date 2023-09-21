const mongoose = require('mongoose');

const url= "mongodb+srv://Rasheeq_123:987654321@cluster0.7jaya56.mongodb.net/mydatabase?retryWrites=true&w=majority";


// asynchronous function - return promise object
mongoose.connect(url)
.then((result) => {    // jab successful ho jae
    console.log('database connected')
    
}).catch((err) => {   // jab error aa jae udhr
    console.log(err);
    
}) ;
console.log('another statement'); 
module.exports = mongoose;


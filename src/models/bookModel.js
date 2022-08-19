const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    author_id:{
        type: Number,
        required: true
    },
    name : String,
    price: Number,
    rating: Number
    
    // isPublished: Boolean,
    // prices: {
    //     indianPrice: String,
    //     europePrice: String,
    // }
    
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover

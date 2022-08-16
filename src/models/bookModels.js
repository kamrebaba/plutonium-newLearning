const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
     
    bookName : String,
    authorName : String,
    Year : Number
    
}
,{ timeStamps: true})
module.exports = mongoose.model( 'Book',bookSchema)









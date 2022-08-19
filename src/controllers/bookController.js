const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {

//     let allBooks= await BookModel.find( )// COUNT

    // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND
    
    // let allBooks= await BookModel.find( { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

    // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 
    
    // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
    // sales : { $in: [10, 17, 82] }
    
    // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})
    
    //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
    //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


    //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
    //  let allBooks= await BookModel.findOne( {sales: 10}) 
    //  let allBooks= await BookModel.find( {sales: 10}) 
    
    

    // //  update (not covered: - findByIdAndUpdate | updateOne )
    // let allBooks= await BookModel.update(   
    //     {  sales: {$gt: 10}  }, //condition
    //     { $set: { isPublished: true} } // the change that you want to make
    //     ) 



    // REGEX
    // let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
    // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
    // let allBooks= await BookModel.find( { bookName:  /5$/  }) 
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 
    
    // ASYNC AWAIT
    
    // let a= 2+4
    // a= a + 10
    // console.log(a)
    // let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous


    // WHEN AWAIT IS USED: - database + axios
    //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
    // console.log(allBooks)
    // let b = 14
    // b= b+ 10
    // console.log(b)
    // res.send({msg: allBooks})
// }
// create author here...
const createAuthor= async function(req,res){
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send ({ msg :savedData})
}
// create book here...
const createBook = async function(req,res){
    let data= req.body
    let savedData = await bookModel.create(data)
    res.send ({ msg : savedData})
}
//1st 
//List out the books written by "Chetan Bhagat" 
// this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. 
const getBooksData= async function( req , res){
    let authors= await authorModel.find({ author_name: "Chetan Bhagat"})
    let bookid= await bookModel.find({ author_id : { $eq : authors[0].author_id}})
    res.send({ msg : bookid})
}
//2nd
//find the author of “Two states” and update the book price to 100;
// send back the author name and updated price in response..
const findAuthor = async function( req , res){
    let bookPrice= await bookModel.findOneAndUpdate(
        { name :"Two States"},
        { price : 100},
        { new : true}
    )
    
        let updatePrice = bookPrice.price;
        let authorUpdate= await authorModel.find( { author_id:{ $eq : bookPrice.author_id}}).select({ author_name : 1, _id : 0})
        res.send({msg: updatePrice , authorUpdate})
    
}
//3rd 
//Find the books which costs between 50-100(50,100 inclusive) and
//respond back with the author names of respective books.. 
const findBook = async function( req , res ){
     let allBooks = await bookModel.find({price : {$gte :50 , $lte :100}})
     let store = allBooks.map( x => x.author_id);
     let NewBooks = await authorModel.find({author_id : store }).select({author_name : 1, _id :0 })
res.send({ msg :NewBooks})
}
module.exports.createAuthor=createAuthor
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.findAuthor= findAuthor
module.exports.findBook = findBook
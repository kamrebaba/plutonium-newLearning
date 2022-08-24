const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const router = require("../routes/route")

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }
// 1st one creating author
const createAuhtor= async function(req,res){
    let Data= req.body
    let authorCreated=await authorModel.create(Data)
    res.send({ msg : authorCreated})
}
//2nd creating publisher
const createPublisher= async function(req,res){
    let data = req.body
    let publisherCreated = await publisherModel.create(data)
    res.send({msg : publisherCreated})
}
//3rd creatingBook..
// const book= async function(req,res){
//     let author_id= req.body.author
//     let publisher_id=req.body.publisher
// if (!author_id){
//     res.send({msg:"authorid is miss"})
// }
// if (!publisher_id){
//     res.send({msg:"publisher is miss"})
// } let

// }
const createBook= async function (req, res) {
    let book = req.body
    let id1 = req.body.author
    let authorid = await authorModel.find({_id:id1}).select({_id:1})
    let id2 = req.body.publisher
    let publisherid = await publisherModel.find({_id:id2})
    if(!id1){
        res.send("author id is require")
    }else if(authorid.length==0){
     res.send("This Author is not present")
     }else if(!id2){
        res.send("Publisher id is require")
     }else if(publisherid.length==0){
        res.send("This publisher is not present")
     }else{
         let bookCreated = await bookModel.create(book)
     res.send({data: bookCreated})
    }
  
}
//4th 
const allBook= async function(req,res){
    let specificBook= await bookModel.find().populate('Author').populate('Publisher')
    res.send({data:specificBook})
}
//5th

    // if (!author_id){
    //     res.send({ msg :"authorid is miss"})
    // }
    // let present= await Author.findById(author_id)
    //     if (present){
    //         if(!publisher_id){
    //             return res.send({ msg:"publisher is miss"})
    //         }
    //         let Publisher=await Publisher.findById(publisher_id)
    //         if (Publisher){
    //             let data= newBook(req.body)
    //             let result=await data.save()
    //             return res.send(result)
    //         }else{
    //             return res.send({msg :"id is not present in pubishermodel"})
    //         }
    //     }else{
    //         return res.send({ msg:"id is not fond in author model"})
    //     }
    // }
    // let createdBook=await bookModel.create(book)



// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }
module.exports.createAuhtor= createAuhtor
module.exports.createPublisher=createPublisher
module.exports.createBook=createBook
module.exports.allBook=allBook
// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

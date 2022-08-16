const bookModels = require("../models/bookModels.js")


const createBook = async function(req,res){
let data = req.body
let savedData = await bookModels.create(data)
res.send({ msg: savedData})
}

const getBookData = async function(req,res){
let allBook =await bookModels.find()
res.send({msg : allBook})
}
module.exports.createBook = createBook
module.exports.getBookData = getBookData
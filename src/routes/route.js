const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.post("/createNewAuthor",BookController.)

// router.get("/getBooksData", BookController.getBooksData)
//author api
router.post("/cretaeAuthor",BookController.createAuthor)
//Book api 
router.post("/createBook",BookController.createBook)
//getBooksData 1st
router.get("/getBookData",BookController.getBooksData)
//find auuthor api 2nd
router.get("/findAuthor",BookController.findAuthor)
//find book api 3rd
router.get("/findBook",BookController.findBook)




module.exports = router;
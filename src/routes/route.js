const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//authorAPI
router.post("/createAuthor", bookController.createAuhtor )
//2nd api
router.post("/publisherCreated",bookController.createPublisher)
//3rd api
router.post("/book",bookController.createBook)
//4th api
router.get("/getAllBook",bookController.allBook)
// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;
const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/").get(booksController.findAll).post(booksController.create);

// Matches with "/api/books/:id"
router.route("/:id").get(booksController.findById).delete(booksController.remove);

// exporting book routes to be used in other parts of the application
module.exports = router;

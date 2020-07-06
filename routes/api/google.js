const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/books/:title"
router.route("/:title").get(googleController.findByTitle);

module.exports = router;

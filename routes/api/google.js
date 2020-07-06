const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with "/api/books/:id"
router
  .route("/:title")
  .get(googleController.findByTitle);

module.exports = router;

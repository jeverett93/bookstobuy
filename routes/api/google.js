const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// Matches with queryUrl + /:title"
router.route("/:title").get(googleController.findByTitle);

// exporting google route to be used in other parts of the application
module.exports = router;

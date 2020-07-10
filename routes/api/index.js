const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

// Book and google routes
router.use("/books", bookRoutes);
router.use("/google", googleRoutes);

module.exports = router;

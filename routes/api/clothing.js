const router = require("express").Router();
const clothingController = require("../../controllers/clothingController");

// Matches with "/api/clothing"
router.route("/")
  .get(clothingController.findAll)
  .post(clothingController.create);

// Matches with "/api/clothing/:id"
router
  .route("/:id")
  .get(clothingController.findById)
  .put(clothingController.update)
  .delete(clothingController.remove);

module.exports = router;
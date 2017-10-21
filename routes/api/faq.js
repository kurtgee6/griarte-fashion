const router = require("express").Router();
const faqController = require("../../controllers/faqController");

// Matches with "/api/faq"
router.route("/")
  .get(faqController.findAll)
  .post(faqController.create);

// Matches with "/api/faq/:id"
router
  .route("/:id")
  .get(faqController.findById)
  .put(faqController.update)
  .delete(faqController.remove);

module.exports = router;
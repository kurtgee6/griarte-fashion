const router = require("express").Router();
const userRoutes = require("./user");
const clothingRoutes = require("./clothing");
const faqRoutes = require("./faq");


// User routes
router.use("/user", userRoutes);

//Clothing routes
router.use("/clothing", clothingRoutes);

//FAQ routes
router.use("/faq", faqRoutes);



module.exports = router;
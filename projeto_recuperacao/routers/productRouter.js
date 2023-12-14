const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

router.get("/", ProductController.getAllProduct);
router.post("/add", ProductController.createProduct);
router.post("/remove", ProductController.removeProduct);
module.exports = router
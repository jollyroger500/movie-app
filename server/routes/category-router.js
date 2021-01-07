const express = require('express')

const CategoryCtrl = require('../controllers/category-ctrl')

const categoryRouter = express.Router()

router.post('/category', CategoryCtrl.createCategory)
router.put('/category/:id', CategoryCtrl.updateCategory)
router.delete('/category/:id', CategoryCtrl.deleteCategory)
router.get('/category/:id', CategoryCtrl.getCategoryById)
router.get('/categories', CategoryCtrl.getCategories)

module.exports = categoryRouter

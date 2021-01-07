const express = require('express')

const CategoryCtrl = require('../controllers/category-ctrl')

const categoryRouter = express.Router()

categoryRouter.post('/category', CategoryCtrl.createCategory)
categoryRouter.put('/category/:id', CategoryCtrl.updateCategory)
categoryRouter.delete('/category/:id', CategoryCtrl.deleteCategory)
categoryRouter.get('/category/:id', CategoryCtrl.getCategoryById)
categoryRouter.get('/categories', CategoryCtrl.getCategories)

module.exports = categoryRouter

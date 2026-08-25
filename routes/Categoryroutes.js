// routes/categoryRoutes.js
const router = require('express').Router();
const {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory
} = require('../controllers/Categorycontroller');
// const { protect, adminOnly } = require('../middelwares/auth');

router.get('/', getCategories);              // sab dekh sakte hain
router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
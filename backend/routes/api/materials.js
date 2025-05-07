const express = require('express');
const router = express.Router();
const {
  getMaterials,
  getMaterial,
  createMaterial,
  updateMaterial,
  deleteMaterial
} = require('../../controllers/materialsController');

// @route   GET /api/materials
// @desc    Get all materials
router.get('/', getMaterials);

// @route   GET /api/materials/:id
// @desc    Get single material
router.get('/:id', getMaterial);

// @route   POST /api/materials
// @desc    Create a material
router.post('/', createMaterial);

// @route   PUT /api/materials/:id
// @desc    Update a material
router.put('/:id', updateMaterial);

// @route   DELETE /api/materials/:id
// @desc    Delete a material
router.delete('/:id', deleteMaterial);

module.exports = router;
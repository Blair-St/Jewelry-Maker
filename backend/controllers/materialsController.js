const Material = require('../models/Material');

// @desc    Get all materials
// @route   GET /api/materials
// @access  Public
exports.getMaterials = async (req, res) => {
  try {
    const materials = await Material.find();
    res.json(materials);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Get single material
// @route   GET /api/materials/:id
// @access  Public
exports.getMaterial = async (req, res) => {
  try {
    const material = await Material.findById(req.params.id);
    
    if (!material) {
      return res.status(404).json({ msg: 'Material not found' });
    }
    
    res.json(material);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Material not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Create a material
// @route   POST /api/materials
// @access  Public (you might want to add authentication later)
exports.createMaterial = async (req, res) => {
  try {
    const newMaterial = new Material(req.body);
    const material = await newMaterial.save();
    
    res.json(material);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Update a material
// @route   PUT /api/materials/:id
// @access  Public (you might want to add authentication later)
exports.updateMaterial = async (req, res) => {
  try {
    const material = await Material.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!material) {
      return res.status(404).json({ msg: 'Material not found' });
    }
    
    res.json(material);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Material not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Delete a material
// @route   DELETE /api/materials/:id
// @access  Public (you might want to add authentication later)
exports.deleteMaterial = async (req, res) => {
  try {
    const material = await Material.findById(req.params.id);
    
    if (!material) {
      return res.status(404).json({ msg: 'Material not found' });
    }
    
    await material.deleteOne();
    
    res.json({ msg: 'Material removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Material not found' });
    }
    res.status(500).send('Server Error');
  }
};
const Product = require("../models/Product");

// ------------------------------
// CREATE - Naya product banao
// POST /api/products
// ------------------------------
exports.createProduct = async (req, res) => {
  try {
    const { name, slug, description, price, stock, category, image } = req.body;

    const product = await Product.create({
      name,
      slug,
      description,
      price,
      stock,
      category,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Product ban gaya",
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// ------------------------------
// READ ALL - Sab products laao
// GET /api/products
// ------------------------------
exports.getAllProducts = async (req, res) => {
  try {
    // .populate("category") -> category ki details bhi sath aayengi (sirf id nahi)
    const products = await Product.find().populate("category", "name slug");

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ------------------------------
// READ ONE - Ek product laao (id se)
// GET /api/products/:id
// ------------------------------
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category", "name slug");

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product nahi mila",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ------------------------------
// UPDATE - Product update karo
// PUT /api/products/:id
// ------------------------------
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // new: updated data return karega
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product nahi mila",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product update ho gaya",
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// ------------------------------
// DELETE - Product delete karo
// DELETE /api/products/:id
// ------------------------------
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product nahi mila",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product delete ho gaya",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
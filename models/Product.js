const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name zaroori hai"],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: [true, "Price zaroori hai"],
      min: [0, "Price negative nahi ho sakti"],
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // Category model ke sath link
      required: true,
    },
    image: {
      type: String, // image ka URL ya filename
      default: "",
    },
  },
  { timestamps: true } // createdAt, updatedAt khud add ho jayenge
);

module.exports = mongoose.model("Product", productSchema);
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name must be provided for a product..."],
  },
  price: {
    type: Number,
    required: [true, "Price must be provided for a product..."],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      messsage: "{VALUE} is not supported!",
    },
    //enum:['ikea', 'liddy', 'caressa', 'marcos']
  },
});

module.exports = mongoose.model("Product", productSchema);

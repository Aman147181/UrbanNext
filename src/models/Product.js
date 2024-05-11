import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },

    images: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", ProductSchema);

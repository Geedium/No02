import Mongoose from 'mongoose'

import type { ProductDocument } from 'types/ProductDocument'

const ProductSchema = new Mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Error'],
    unique: true,
    trim: true,
    maxlength: [40, 'Error']
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, 'Error']
  },
  price: {
    type: Number
  },
  quantity: {
    type: Number
  }
}, {
  timestamps: true
})

export const Product = Mongoose.models.Product || Mongoose.model<ProductDocument>("Product", ProductSchema)
import Mongoose from 'mongoose'

export type ProductDocument = Mongoose.Document & {
    title: {
      type: StringConstructor;
      required: (string | boolean)[];
      unique: boolean;
      trim: boolean;
      maxlength: (string | number)[];
    },
    description: {
      type: StringConstructor;
      required: boolean;
      maxlength: (string | number)[];
    },
    price: {
			type: NumberConstructor;
    },
    quantity: {
      type: NumberConstructor;
    }
}
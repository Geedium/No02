import Mongoose from 'mongoose'

export type NoteDocument = Mongoose.Document & {
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
  }
}

const NoteSchema = new Mongoose.Schema({
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
  }
}, {
  timestamps: true
})

export const Note = Mongoose.models.Note || Mongoose.model<NoteDocument>("Note", NoteSchema)
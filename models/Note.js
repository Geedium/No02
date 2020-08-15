const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
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
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema)

import mongoose from 'mongoose';

const schema = new monggose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  cover: { type: String, required: true },
  goodreadsId: { type: String },
  pages: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true }
});

export default mongoose.model('Book', schema);

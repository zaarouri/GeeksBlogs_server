const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  picture: { type: String },
  comments: [{ body: String, date: Date }],
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);

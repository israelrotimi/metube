const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String },
    videoUrl: { type: String, required: true },
    thumbnailUrl: { type: String },
    tags: [String],
    likes: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } }],
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Video', VideoSchema);


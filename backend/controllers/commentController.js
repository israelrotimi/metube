const Comment = require('../models/Comment');
const Video = require('../models/Video');

exports.addComment = async (req, res) => {
    const { text, videoId } = req.body;

    try {
        const newComment = new Comment({
            user: req.user.id,
            video: videoId,
            text
        });
        const comment = await newComment.save();
        res.json(comment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ video: req.params.videoId }).sort({ date: -1 });
        res.json(comments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.likeVideo = async (req, res) => {
    try {
        const video = await Video.findById(req.params.videoId);
        if (!video) return res.status(404).json({ msg: 'Video not found' });

        if (video.likes.some(like => like.user.toString() === req.user.id)) {
            video.likes = video.likes.filter(like => like.user.toString() !== req.user.id);
        } else {
            video.likes.unshift({ user: req.user.id });
        }

        await video.save();
        res.json(video.likes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};


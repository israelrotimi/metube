const Video = require('../models/Video');

exports.uploadVideo = async (req, res) => {
    const { title, description, tags } = req.body;
    const videoUrl = req.file.path;

    try {
        const newVideo = new Video({
            user: req.user.id,
            title,
            description,
            videoUrl,
            tags: tags.split(',').map(tag => tag.trim())
        });
        const video = await newVideo.save();
        res.json(video);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getVideos = async (req, res) => {
    try {
        const videos = await Video.find().sort({ date: -1 });
        res.json(videos);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getVideo = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!video) return res.status(404).json({ msg: 'Video not found' });
        res.json(video);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};


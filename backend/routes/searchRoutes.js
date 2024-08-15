const express = require('express');
const router = express.Router();
const Video = require('../models/Video');

router.get('/:query', async (req, res) => {
    try {
        const videos = await Video.find({ title: { $regex: req.params.query, $options: 'i' } });
        res.json(videos);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;

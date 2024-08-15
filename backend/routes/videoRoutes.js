const express = require('express');
const router = express.Router();
const { uploadVideo, getVideos, getVideo } = require('../controllers/videoController');
const auth = require('../middlewares/auth');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

router.post('/', auth, upload.single('video'), uploadVideo);
router.get('/', getVideos);
router.get('/:id', getVideo);

module.exports = router;


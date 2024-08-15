const express = require('express');
const router = express.Router();
const { addComment, getComments, likeVideo } = require('../controllers/commentController');
const auth = require('../middlewares/auth');

router.post('/', auth, addComment);
router.get('/:videoId', getComments);
router.put('/like/:videoId', auth, likeVideo);

module.exports = router;


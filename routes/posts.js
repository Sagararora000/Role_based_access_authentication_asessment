const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts_controller');

router.post('/create-post',postsController.createPost);
router.get('/destroy/:id',postsController.destroyPost);
 module.exports = router;
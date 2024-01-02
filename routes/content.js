const express = require('express');
const router = express.Router();

const contentController = require('../controllers/content_controller');
router.get('/',contentController.displayContent);
return module.exports = router;
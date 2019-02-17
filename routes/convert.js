const express = require('express');
const router = express.Router();
const { convert } = require('../controllers/convert');

router.get('/', convert);

module.exports = router;

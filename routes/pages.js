const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/first-project', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'first-project.html'));
});

module.exports = router;

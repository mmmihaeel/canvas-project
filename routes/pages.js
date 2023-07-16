const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/first-project', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'first-project.html'));
});

router.get('/second-project', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'second-project.html'));
});

router.get('/third-project', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'third-project.html'));
});

module.exports = router;

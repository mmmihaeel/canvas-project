const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

router.get('/first-project', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'first-project.html'));
});

router.get('/second-project', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'second-project.html'));
});

router.get('/third-project', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'third-project.html'));
});

router.get('/bubbles', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'bubbles.html'));
});

router.get('/liquid', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'liquid.html'));
});

router.get('/constellations_yellow', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'constellations_yellow.html'));
});

router.get('/rainbow', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'rainbow.html'));
});

router.get('/sunrays', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'sunrays.html'));
});

router.get('/disapearing-lines', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'disapearing-lines.html'));
});

router.get('/constellations_outlines', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'constellations_outlines.html'));
});

router.get('/color_split', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'color_split.html'));
});

module.exports = router;

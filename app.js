const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const rootDir = __dirname;
const port = process.env.PORT || 3000;
const app = express();
const pagesRoutes = express.Router();

pagesRoutes.get("/", (req, res) => {
  res.sendFile(path.join(rootDir, 'public', 'views', 'index.html'));
});

pagesRoutes.get('/first-project', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'public', 'views', 'first-project.html'));
});

pagesRoutes.get('/second-project', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'public', 'views', 'second-project.html'));
});

pagesRoutes.get('/third-project', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'public', 'views', 'third-project.html'));
});

pagesRoutes.get('/bubbles', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'public', 'views', 'bubbles.html'));
});

pagesRoutes.get('/liquid', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'public', 'views', 'liquid.html'));
});

pagesRoutes.get('/constellations_yellow', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'public', 'views', 'constellations_yellow.html'));
});

pagesRoutes.get('/rainbow', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'public', 'views', 'rainbow.html'));
});

pagesRoutes.get('/sunrays', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'public', 'views', 'sunrays.html'));
});

pagesRoutes.get('/disapearing-lines', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'public', 'views', 'disapearing-lines.html'));
});

pagesRoutes.get('/constellations_outlines', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'public', 'views', 'constellations_outlines.html'));
});

pagesRoutes.get('/color_split', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'public', 'views', 'color_split.html'));
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(pagesRoutes);
app.listen(port, () => {
  console.log(`Process ${process.pid}, URL http://localhost:${port}, Server is being listened on ${port}`);
});

module.exports = app;
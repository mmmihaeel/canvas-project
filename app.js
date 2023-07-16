const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const pagesRoutes = require('./routes/pages');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(pagesRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Process ${process.pid}, URL http://localhost:${port}, Server is being listened on ${port}`);
});

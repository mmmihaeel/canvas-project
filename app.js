const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const pagesRoutes = require('./routes/pages');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(pagesRoutes);

app.listen(3000, () => {
    console.log(`Process ${process.pid}, URL http://localhost:${3000}, Server is being listened on ${3000}`);
});

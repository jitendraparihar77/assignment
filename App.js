const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes
const indexRouter = require('./routes/index');
const searchRouter = require('./routes/search');
const favouritesRouter = require('./routes/favourites');

app.use('/', indexRouter);
app.use('/search', searchRouter);
app.use('/favourites', favouritesRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

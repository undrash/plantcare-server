const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/routes");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/plantcare");

/** Allow cross-origin requests */
app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use( bodyParser.json() );

routes(app);


module.exports = app;
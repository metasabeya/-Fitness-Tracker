//install packages
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
//set port
const PORT = process.env.PORT || 3000;

const app = express();

//use logger
app.use(logger("dev"));

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use static files
app.use(express.static("public"));

const URI = process.env.MONGODB_URI || "mongodb://user:password@ds261247.mlab.com:61247/heroku_ct8vrw1g"

mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
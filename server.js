const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require("path");
// Database connection
const connectDB = require('./server/database/connection')

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080

// Log Requests
app.use(morgan('tiny'));

// MongoDB Connection

connectDB();

// Parse requests to body parser
app.use(bodyparser.urlencoded({ extended: true}));

// Set view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views/ejs"));

// Load Assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")))
app.use("/img", express.static(path.resolve(__dirname, "assets/img")))
app.use("/js", express.static(path.resolve(__dirname, "assets/js")))
app.use("/webfonts", express.static(path.resolve(__dirname, "assets/webfonts")))

// Load Routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});
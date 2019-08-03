const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const keys = require('./config/keys');
const passport = require('passport');

//Configure express to use cors
app.use(cors());


// Configure express to read body from a POST request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database connection string
const db = keys.mongoURI;

// Connect to mongo with mongoose
mongoose
    .connect(db, {})
    .then(()=> console.log("Db Connected"))
    .catch(err => console.log(err));

//Init passportjs
app.use(passport.initialize());

//Import the function from the file and invoke/call immediately
require('./config/passport')(passport);

// Anything that goes to http://localhost:5000/users/
// goes in User.js
const userRoutes = require('./routes/User');
app.use('/users', passport.authenticate('jwt', {session:false}), userRoutes);

//Post routes
const postRoutes = require('./routes/Post');
app.use('/posts', passport.authenticate('jwt', {session:false}), postRoutes);

//Auth routes
const authRoutes = require('./routes/Auth');
app.use('/auth', authRoutes);

// Method: GET
// The homepage
app.get('/', (req, res) => res.json({
    msg: "Hola Amingo!!"
}));

// If port is specified, user it. Otherwise default to 5000
const port = process.env.PORT || 5000;

// Connect to the port.
app.listen(port, () => console.log(`Things are working just dandy here @ http://localhost:${port}`));
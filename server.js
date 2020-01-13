const express = require('express');
const connectDB = require('./config/db');
const fileUpload = require('express-fileupload');
const app = express();


connectDB();

// Init middleware to be able to extract request body
app.use(express.json({ extended: false }));
app.use(fileUpload());

// Setting up the routes which will be separate js files within the routes folder
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/recipes', require('./routes/recipes'));
app.use('/api/upload', require('./routes/upload'));

// Setting up the production and the development PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on PORT ' + PORT));

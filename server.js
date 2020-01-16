const express = require('express');
const connectDB = require('./config/db');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();

connectDB();

// Init middleware to be able to extract request body
app.use(express.json({ extended: false }));

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(fileUpload());
app.use(cors(corsOptions));
app.use('/client/public/uploads', express.static('./client/public/uploads'));

// Setting up the routes which will be separate js files within the routes folder
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/recipes', require('./routes/recipes'));

// Setting up the production and the development PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on PORT ' + PORT));

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator')

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private

// Everytime when we need to protect a private route we bring in the middleware
// With that we can verify the user through the token and req.user (which comes from the middleware)
// This route is to be used on the frontend to identify the currently logged in user
// who is trying to edit his own recipes
router.get('/', auth, async (req, res) => {

    try {

        // If the token has been validated through the middleware (auth)
        // We got the user id and attached it to the req.user within the middleware
        // --> We can use it to get the user from the database (minus the password)
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error")
    }
})

// @route   POST api/auth
// @desc    Auth user and get token
// @access  Public

// Handling the user request to log in with an e-mail address and a password
// Using express-validator to check if the request body contains the valid e-mail
// Checking if the user typed in a password --> matching will be issued later
router.post('/', [
    check('email', 'Please include a valid e-mail').isEmail(),
    check('password', 'Password is required...').exists()
], 
async (req, res) => {

    // Returning a Bad Request status and an array of errors if the validation did not pass
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Pulling out the e-mail and the password from the request body
    const { email, password } = req.body;

    try {

        // Trying to find a matching user in the Database (via e-mail)
        // This user variable will contain the name, email, password and date of registration
        let user = await User.findOne({ email });

        // If no user has been found - Return a Bad Request status with a custom message
        // At this point only the e-mail has been checked if it exists in the Database
        if(!user){
            return res.status(400).json({ msg: "Invalid Login Data" })
        }

        // If the user has been found in the DB the inserted and the stored
        // passwords must be compared (using bcrypt)
        const isMatch = await bcrypt.compare(password, user.password);

        // If the passwords don't match return a Bad Request status
        if(!isMatch){
            return res.status(400).json({ msg: "Invalid Login data" });
        }

        // Setting up the payload for the Json WebToken if the inserted user data is valid
        const payload = {
            user: {
                id: user.id
            }
        }

        // Creating a token that contains the user id (payload)
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (error, token) => {
            if(error){
                throw error;
            }

            // Returning the token
            res.json({ token })
        })

    } catch (err) {

        console.error(err.message);
        res.status(500).send('Server Error')
        
    }
})

module.exports = router;
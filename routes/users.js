const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')
const { check, validationResult } = require('express-validator')

// @route   POST api/users
// @desc    Register a user
// @access  Public
// Using the express-validator to check if the request body contains all the necessary data
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'E-mail is required').isEmail(),
    check('password', 'Please enter a password with at least 6 characters').isLength({
        min: 6
    })
],async (req, res) => {

    // Returning an array of errors and a 400 Status (Bad Request) if there are errors
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    // Pulling out the user data from request body if the request was valid
    const { name, email, password } = req.body;

    try {

        // Trying to find the user in the database
        // If no user was found it will be null
        // Otherwise returning a 400 Status with a custom message
        let user = await User.findOne({ email })

        if(user){
            return res.status(400).json({ msg: "User already exists." })
        }

        // Re-initializing the user variable
        // Set User Schema with the data from the request body
        // This can be saved in the MongoDB Database
        user = new User({
            name,
            email,
            password
        });

        // Encrypting the user password
        // Generating salt for later hashing
        const salt = await bcrypt.genSalt(10);
        // Hashing the password
        user.password = await bcrypt.hash(password, salt)

        // Saving the user to the DB
        await user.save();

        // Handling the Json WebToken
        // Setting up a payload which will be passed along with the token
        const payload = {
            user: {
                id: user.id
            }
        }

        // Signing the token, passing along the payload, throwing an error if something goes wrong
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (error, token) => {
            if(error){
                throw error;
            }

            // Returning the token for further usage
            res.json({ token })
        })

    } catch (err) {

        // Catching the error if something went wrong with the previous processes
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

module.exports = router;
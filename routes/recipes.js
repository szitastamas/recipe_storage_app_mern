const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const fileUpload = require('express-fileupload');
const multer = require('multer');
const User = require('../models/User');
const Recipe = require('../models/Recipe');
const uuid = require('uuid');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/public/uploads/');
    },
    fileName: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024
    },
    fileFilter: fileFilter
});

// @route   GET api/recipes
// @desc    Get all user's recipes
// @access  Private
// router.get('/', auth, async (req, res) => {

//     try {
//         const recipes = await Recipe.find({ user: req.user.id });
//         res.json(recipes)
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send("Server Error")
//     }

// })

// @route   GET api/user/:id
// @desc    Get one user's own recipes
// @access  Private
router.get('/user/:id', auth, async (req, res) => {
    try {
        const recipes = await Recipe.find({ user: req.user.id });
        res.json(recipes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/recipes/:id
// @desc    Get all public recipes
// @access  Public
router.get('/public', async (req, res) => {
    try {
        const recipes = await Recipe.find({ privacy: 'public' });
        res.json(recipes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/recipes
// @desc    Add a new recipe
// @access  Private
router.post(
    '/',
    // [
    //     // auth,
    // [
    //     check('title', 'Title is required.')
    //         .not()
    //         .isEmpty(),
    //     check('description', 'Description is required')
    //         .not()
    //         .isEmpty()
    // ],
    //     upload.single('file')
    // ],
    async (req, res) => {
        //const errors = validationResult(req.body);

        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }

        const { title, description, type, privacy, date } = req.body;
        const { pic } = req.files;
        console.log(title, description, type, privacy, date, pic);

        const randomID = uuid.v4();
        const picName = randomID + '_' + pic.name;
        const picLocation = path.join(__dirname, '..', `/client/public/uploads/${picName}`);
        console.log(picLocation);

        pic.mv(picLocation, err => {
            if (err) {
                console.log(err);
                return res.status(500).json({ msg: 'Bad Request. File Upload Failed.' });
            }
        });

        try {
            const newRecipe = new Recipe({
                user: req.user.id,
                title,
                description,
                type,
                privacy,
                date,
                pic
            });

            const recipe = await newRecipe.save();
            res.json(recipe);
        } catch (err) {
            console.error(err.message);
            return res.status(500).send('Server Error');
        }
    }
);

// @route   PUT api/recipes/:id
// @desc    Update Recipe
// @access  Private
router.put('/:id', auth, async (req, res) => {
    const { title, description, type, privacy } = req.body;

    // Build a new recipe object which will re-initialize the existing recipe
    const recipeFields = {};
    // If we got the following attributes from the request body we set it to the new recipeFields object
    if (title) recipeFields.title = title;
    if (description) recipeFields.description = description;
    if (type) recipeFields.type = type;
    if (privacy) recipeFields.privacy = privacy;

    try {
        // Finding the recipe which should be updated
        let recipe = await Recipe.findById(req.params.id);

        // If no recipe has been found return with status 404
        if (!recipe) return res.status(404).json({ msg: 'Recipe not found' });

        // Checking if user owns recipe
        if (recipe.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized.' });
        }

        // Re-initializing the recipe variable
        // Finding the recipe via the ID that arrived from the request parameters
        // Setting the recipe in the Recipe Collection to the recipeFields object -->
        // overwriting the existing object with the new one
        recipe = await Recipe.findByIdAndUpdate(req.params.id, { $set: recipeFields }, { new: true });

        // Returning the recipe to the user
        res.json(recipe);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});

// @route   DELETE api/recipes/:id
// @desc    Delete Recipe
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {
        // Finding the recipe which should be updated
        let recipe = await Recipe.findById(req.params.id);

        // If no recipe has been found return with status 404
        if (!recipe) return res.status(404).json({ msg: 'Recipe not found' });

        // Checking if user owns recipe
        if (recipe.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized.' });
        }

        // Re-initializing the recipe variable
        // Finding the recipe via the ID that arrived from the request parameters
        // Setting the recipe in the Recipe Collection to the recipeFields object -->
        // overwriting the existing object with the new one
        await Recipe.findByIdAndRemove(req.params.id);

        // Returning the recipe to the user
        res.json({ msg: 'Recipe successfully removed.' });
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
});

module.exports = router;

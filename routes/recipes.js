const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator')

const User = require('../models/User');
const Recipe = require('../models/Recipe');

// @route   GET api/recipes
// @desc    Get all user's recipes
// @access  Private
router.get('/', auth, async (req, res) => {

    try {
        const recipes = await Recipe.find({ user: req.user.id }).sort({ date: -1 });
        res.json(recipes)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error")
    }

})

// @route   GET api/recipes/:id
// @desc    Get one specific recipe
// @access  Private
router.get('/:id', (req, res)=>{
    res.send('Getting one recipe...')
})

// @route   POST api/recipes
// @desc    Add a new recipe
// @access  Private
router.post('/', [auth, [
    check('title', 'Title is required.').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const { title, description, type, privacy, date } = req.body;

    try {
        
        const newRecipe = new Recipe({
            user: req.user.id,
            title,
            description,
            type,
            privacy,
            date
        })

        const recipe = await newRecipe.save();

        res.json(recipe)

    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error")
    }

})

// @route   PUT api/recipes/:id
// @desc    Update Recipe
// @access  Private
router.put('/:id', auth, async (req, res) => {
    
    const { title, description, type, privacy } = req.body;

    // Build a new recipe object which will re-initialize the existing recipe
    const recipeFields = {};
    // If we got the following attributes from the request body we set it to the new recipeFields object
    if(title) recipeFields.title = title;
    if(description) recipeFields.description = description;
    if(type) recipeFields.type = type;
    if(privacy) recipeFields.privacy = privacy;

    try {

        // Finding the recipe which should be updated
        let recipe = await Recipe.findById(req.params.id);

        // If no recipe has been found return with status 404
        if(!recipe) return res.status(404).json({ msg: "Recipe not found" })

        // Checking if user owns recipe
        if(recipe.user.toString() !== req.user.id){
            return res.status(401).json({ msg: "Not authorized." })
        }

        // Re-initializing the recipe variable
        // Finding the recipe via the ID that arrived from the request parameters
        // Setting the recipe in the Recipe Collection to the recipeFields object -->
        // overwriting the existing object with the new one
        recipe = await Recipe.findByIdAndUpdate(
            req.params.id, 
            {$set: recipeFields},
            {new: true}
        );

        // Returning the recipe to the user
        res.json(recipe)
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error")
    }

})

// @route   DELETE api/recipes/:id
// @desc    Delete Recipe
// @access  Private
router.delete('/:id', auth, async (req, res) => {
    try {

        // Finding the recipe which should be updated
        let recipe = await Recipe.findById(req.params.id);

        // If no recipe has been found return with status 404
        if(!recipe) return res.status(404).json({ msg: "Recipe not found" })

        // Checking if user owns recipe
        if(recipe.user.toString() !== req.user.id){
            return res.status(401).json({ msg: "Not authorized." })
        }

        // Re-initializing the recipe variable
        // Finding the recipe via the ID that arrived from the request parameters
        // Setting the recipe in the Recipe Collection to the recipeFields object -->
        // overwriting the existing object with the new one
        Recipe.findByIdAndRemove(req.params.id);

        // Returning the recipe to the user
        res.json({ msg: "Recipe successfully removed." })
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error")
    }
})

module.exports = router;
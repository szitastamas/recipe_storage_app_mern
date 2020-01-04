const express = require('express');
const router = express.Router();

// @route   GET api/recipes
// @desc    Get all user's recipes
// @access  Private
router.get('/', (req, res) => {
    res.send('Get own recipes...');
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
router.post('/', (req, res) => {
    res.send('Add recipe');
})

// @route   PUT api/recipes/:id
// @desc    Update Recipe
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update recipe');
})

// @route   DELETE api/recipes/:id
// @desc    Delete Recipe
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete recipe');
})

module.exports = router;
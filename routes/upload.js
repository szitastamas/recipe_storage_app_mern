const express = require('express');
const path = require('path')
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/', auth, (req, res) => {

    const file = req.files.file;
    const picName = file.name;
    file.mv(`${__dirname}/../client/public/uploads/${file.name}`, err => {
        if(err){
            console.error(err.message);
            const picLocation = path.join(__dirname, "..", `/client/public/img/default.jpg`);
            return res.status(500).json(picLocation);
        }
    })

    const picLocation = path.join(__dirname, "..", `/client/public/uploads/${picName}`);
    console.log(picLocation)
    return res.json(picLocation);
})

module.exports = router;
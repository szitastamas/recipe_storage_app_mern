const express = require('express');
const path = require('path')
const router = express.Router();
const auth = require('../middleware/auth');
const uuid = require('uuid');

router.post('/', auth, (req, res) => {

    const file = req.files.file;
    const randomID = uuid();
    const picName =  randomID + '_' + file.name;
    const picLocation = path.join(__dirname, "..", `/client/public/uploads/${picName}`);

    file.mv(picLocation, err => {
        console.log(err.message)
        return res.status(500).json({ msg: "Bad Request. File Upload Failed."})
    })

    res.json(picLocation);
})

module.exports = router;
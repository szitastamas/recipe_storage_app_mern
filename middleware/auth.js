// The middleware has access to the request-response cycle
// We can check if there is a validation token in the request header to identify the user

const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next){
    // Get the token from header
    const token = req.header('x-auth-token');

    // Check if token exists
    if(!token){
        // Returning a status of not authorized if the token doesn't exist
        return res.status(401).json({ msg: 'No token - Authorization denied.' })
    }

    try {
        // Decoding the token and getting out the user ID
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        // Setting the user that is in the payload to the req.user so that we can use the req.user in other files
        req.user = decoded.user;
        next();

    } catch (err) {
        
        res.status(401).json({ msg: "Token is not valid." })
    }
}

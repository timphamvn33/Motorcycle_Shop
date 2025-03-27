const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

    const token = req.header('Authorization')?.replace('Bearer ', '');  // Extract token
    
    if(!token) {
        return res.status(401).json({message: 'Unauthorized'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded
        next();
    } catch(err) {
        return res.status(401).json({message: 'Unauthorized'});
    }
};

module.exports = authMiddleware;
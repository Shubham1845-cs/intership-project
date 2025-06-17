// middleware/authMiddleware.js

import jwt from 'jsonwebtoken'
import User from '../Model/user.js'

export const  protect = async (req, res, next) => {
  let token = req.headers.authorization;

  // 1. Check if token exists and starts with "Bearer "
  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    // 2. Extract the token string (remove "Bearer ")
    token = token.split(' ')[1];

    // 3. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // decoded is { id: <userId>, iat: ..., exp: ... }

    // 4. Attach user to request
    req.user = await User.findById(decoded.id).select('-password');
    if (!req.user) {
      return res.status(401).json({ message: 'No user found for this token' });
    }

    next(); // “token is valid, proceed to next middleware/controller”
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: 'Token verification failed' });
  }
};

const JWT = require('jsonwebtoken')

const getUserFromToken = (token) => {
  try {
    return JWT.verify(token, process.env.JWT_SECRET)  
  } catch (error) {
    return null;
  }
};

module.exports = {getUserFromToken}
const { User } = require("../models/Account");

let auth = (req, res, next) => {
  // get token from client cookie
  let token = req.cookies.createToken;

  // If no token is provided, return an error response
  if (!token) {
    return res.status(401).json({isAuth: false, error: 'No authentication token provided.'});
  }

  // decode token and find user
  User.findByToken(token)
    .then(user => {
      if(!user) return res.json({isAuth: false, error: true})

      req.token = token;
      req.user = user;
      next();
    })
    .catch(err => { 
        console.error(err);
        return res.status(500).json({error: 'An error occurred'});
     });
};




module.exports = { auth };
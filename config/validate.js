var jwt = require('jsonwebtoken')
module.exports = function() {
    this.authorize = function(req, res, next) {
	  try {
	    var token = req.headers['x-access-token'];
	    if(!token){
	      res.sendStatus(403);
	    }else{
	      jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
	        if(err){
	          res.sendStatus(401);
	        }else{
	          req.body.userId = decoded.id;
	          next();
	        }
	      });
	    }
	  }catch(err){
	    res.status(200).send(err)
	  }
    };
}
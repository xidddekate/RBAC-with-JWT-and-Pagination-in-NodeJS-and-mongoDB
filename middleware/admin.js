
module.exports = function (req, res, next) { 
  // 401 Unauthorized
  // 403 Forbidden 
  
  if (!req.user.role.isAdmin) return res.status(403).json({error : "Access denied. Only Admin is allowed to perform this operation"});

  next();
}
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authMiddleware = async (req, res, next) => {
  const headerAuth = req.headers.authorization;
  if (!headerAuth || !headerAuth.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No token provided");
  }
  const token = headerAuth.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Not authorized to access this route!!!");
  }
};

module.exports = authMiddleware;
const notFound = (req, res) => {
  res.status(404).send("Sorry route does not exist");
};
module.exports = notFound;

const notFound = (req, res) => res.status(404).redirect('/notfound');
module.exports = {notFound}
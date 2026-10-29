const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const dataController = require('../controllers/dataController');
const greetController = require('../controllers/greetController');

const routes = (req, res) => {
  const url = new URL(req.url, 'http://localhost');

  if (url.pathname === '/') {
    homeController(req, res);
  } else if (url.pathname === '/about') {
    aboutController(req, res);
  } else if (url.pathname === '/data') {
    dataController(req, res);
  } else if (url.pathname === '/greet') {
    greetController(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
};

module.exports = routes;

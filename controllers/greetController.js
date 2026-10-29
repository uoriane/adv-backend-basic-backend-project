const greetController = (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const name = url.searchParams.get('name');

  if (!name) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Please provide a name');
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello, ${name}!`);
};

module.exports = greetController;

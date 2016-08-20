import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hellorushil\n');
}).listen(3000, '0.0.0.0');

console.log('Server running on port 80');

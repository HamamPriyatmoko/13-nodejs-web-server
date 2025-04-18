const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello World');
  res.end(); // Untuk menandakan printah didalam servernya sudah selesai
});

// Method Listen yang akan menjalankan web servernya
server.listen(3000, () => {
  // secara default portnya sudah 3000 dan hostnya defaultnya localhost
  console.log('Server is listening on port 3000..');
});

const http = require('http');
const fs = require('fs');
const port = 3000;

/**
 * Yang ditulis dibawah ini akan menghasilkan plaintext
 */
// const server = http.createServer((req, res) => {
//   res.write('Hello World');
//   res.end(); // Untuk menandakan printah didalam servernya sudah selesai
// });

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });

  const url = req.url;
  if (url === '/about') {
    // res.writeHead(200, {
    //   'Content-Type': 'text/html',
    // });
    // res.write('<h1>Ini adalah Halaman About</h1>');
    res.end();
  } else if (url === '/dashboard') {
    // res.write('<h1>Ini adalah Halaman Dashboard</h1>');
    
    res.end('Sudah Selesai');
  } else if (url === '/contact') {
    // res.write('<h1>Ini adalah Halaman contact</h1>');
    res.end('Sudah Selesai');
  } else {
    // res.write('<h1>Landing Page</h1>');
    res.end('Sudah Selesai');
  }
  //   res.write('Hello world!');
  //   res.end();
});

// Method Listen yang akan menjalankan web servernya
server.listen(port, () => {
  // secara default portnya sudah 3000 dan hostnya defaultnya localhost
  console.log(`Server is listening on port ${port}..`);
});

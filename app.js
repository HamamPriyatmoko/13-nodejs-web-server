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

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/html',
//   });

//   const url = req.url;
//   if (url === '/about') {
//     fs.readFile('./about.html', (err, data) => {
//       if (err) {
//         res.writeHead(404);
//         res.write('Error: File Not Found');
//       } else {
//         res.write(data);
//       }
//       res.end();
//     });
//     // res.writeHead(200, {
//     //   'Content-Type': 'text/html',
//     // });
//     // res.write('<h1>Ini adalah Halaman About</h1>');
//   } else if (url === '/dashboard') {
//     res.write('<h1>Hallo, Ini Halaman Dashboard</h1>');
//     res.end(); // Jika tidak end web koneksi akan tetap terbuka dan browser akan terus "menunggu" data dari server, seperti loading terus.
//   } else {
//     // res.write('<h1>Landing Page</h1>');
//     fs.readFile('./index.html', (err, data) => {
//       if (err) {
//         res.writeHead(404);
//         res.write('Error: File Not Found');
//       } else {
//         res.write(data);
//       }
//       res.end();
//       //   res.end('Selesai');
//     });
//   }
//   //   res.write('Hello world!');
//   //   res.end();
// });

const urlRender = (url, res) => {
  fs.readFile(url, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('Data Tidak Ditemukan');
    } else {
      res.write(data);
    }
    res.end();
  });
};
const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  const url = request.url;
  //   if (url === '/about') {
  //     urlRender('./about.html', response);
  //   } else if (url === '/contact') {
  //     urlRender('./about.html', response);
  //   } else {
  //     urlRender('./index.html', response);
  //   }
  switch (url) {
    case '/about':
      urlRender('./about.html', response);
      break;
    case '/contact':
      urlRender('./contact.html', response);
      break;
    default:
      urlRender('./index.html', response);
      break;
  }
});

// Method Listen yang akan menjalankan web servernya
server.listen(port, () => {
  // secara default portnya sudah 3000 dan hostnya defaultnya localhost
  console.log(`Server is listening on port ${port}..`);
});

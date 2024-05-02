//Using Express
// const express = require('express');
// const bodyParser = require('body-parser');
// const PORT = 3000;

// const app = express();
// app.use(bodyParser.urlencoded({extended: false}))

// app.use('/add-product',(req, res, next) =>{
//     res.send(
//         '<body><form action="/product" method="POST">Title<input type="text" name="title"><br>Size<input type="number" name="size"><br><button type="submit">AddProduct</button></form></body>')
// })

// app.use('/product',(req, res, next) =>{
//     console.log(req.body);
//     res.redirect('/')
// })

// app.use('/',(req, res, next) =>{
//     res.send('<h1>Hello from Express!</h1>');
// })




// app.listen(PORT, ()=>{
//     console.log(`server is listning on PORT: ${PORT}`)
// });



















// const http = require('http');

// const routes = require('./routes');

// console.log(routes.someText);

// const server = http.createServer(routes.handler);

// server.listen(3000);









// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === '/') {

//     res.write('<html>');
//     res.write('<head><title>Enter Message</title><head>');
//     res.write(
//       '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
//     );
//     res.write('</html>');
//     return res.end();
//   }
//   if (url === '/message' && method === 'POST') {
//     const body = [];
//     req.on('data', chunk => {
//       console.log(chunk);
//       body.push(chunk);
//     });
//     return req.on('end', () => {
//       const parsedBody = Buffer.concat(body).toString();
//       const message = parsedBody.split('=')[1];
//       fs.writeFile('message.txt', message, err => {
//         res.statusCode = 302;
//         res.setHeader('Location', '/');
//         return res.end();
//       });
//     });
//   }
//   res.setHeader('Content-Type', 'text/html');
//   res.write('<html>');
//   res.write('<head><title>My First Page</title><head>');
//   res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
//   res.write('</html>');
//   res.end();
// });

// server.listen(3000);



//Display message on screen

// const http = require('http');
// const fs = require('fs');
// const PORT = 3000;

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === '/') {
//     // Read contents of message.txt and display above the form
//     fs.readFile('message.txt', 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//         res.write('<html>');
//         res.write('<head><title>Enter Message</title><head>');
//         res.write('<body>');
//         // Display existing messages
//         if (data) {
//             res.write(data);
//         } 
//         res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
//         res.write('</body></html>');
//         return res.end();
//       }
//     });
//   }
//   if (url === '/message' && method === 'POST') {
//     const body = [];
//     req.on('data', chunk => {
//       console.log(chunk);
//       body.push(chunk);
//     });
//     return req.on('end', () => {
//       const parsedBody = Buffer.concat(body).toString();
//       const message = parsedBody.split('=')[1];
//       fs.writeFile('message.txt', message, err => {
//                 res.statusCode = 302;
//                 res.setHeader('Location', '/');
//                 return res.end();
//               });
//     });
//   }
// });

// //connecting to server
// server.listen(PORT, () =>{
//     console.log(`server is listing on port: ${PORT}`)
// });
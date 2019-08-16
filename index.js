const express = require('express');

//probably a hackey fix to get things started
const fs = require('fs');
const app = express();
const path = require('path');

app.use(express.static(path.resolve('.')));

app.get('*', function (req, res) {

//          Please ignore the litter

// res.sendFile('index.html');
//     res.end(`
// <html>
// <head>
// </head>
// <body>
//     <h1>This is Parkinator</h1>
//     <h2>IT'S IN HAH'VAH'D YAH'D</h2>

// </body>
// </html>
//     `);

    fs.createReadStream(__dirname + '/index.html').pipe(res);

});

app.listen(8080, '0.0.0.0');
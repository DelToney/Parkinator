const express = require('express');
const app = express();
const path = require('path');

// app.use(express.static(path.resolve('.')));

app.get('*', function (req, res) {
    // res.sendFile('index.html');
    res.end(`
<html>
<head>
</head>
<body>
    <h1>This is Parkinator</h1>
    <h2>IT'S IN HAH'VAH'D YAH'D</h2>

</body>
</html>
    `);
});

app.listen(8080, '0.0.0.0');
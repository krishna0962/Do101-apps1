var express = require('express');
app = express();

app.get('/', function (req, res) {
    res.send('Hello World\n');
});

app.get('krishna', function (req, res) {
    res.send('Hello krishna\n');
});

app.listen(8080, function () {
    console.log('Example app listening or port 8080');
});
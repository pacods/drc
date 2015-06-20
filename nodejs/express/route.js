var express = require('express'),
    app = express();

////app.get('/', function (req, res){
//    res.send('<h1>Hello from NodeJs</h1>');
//
//});

app.use(express.static('public'));


app.get('/service', function (req, res){
    res.json({data: 'Some data'});
});

app.get('/service/:name/:last_name', function (req, res){
    res.send('<h1>Hello ' + req.params.name + ' ' +
        req.params.last_name + '</h1>');
});

app.listen(8080);

console.log('Server running on localhost at port 8080');
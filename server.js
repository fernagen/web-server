var express =require('express');
var app = express();
var portNum = $port || 3000;
var middleware = require ('./middleware.js');

// app.get('/',function (req, res) {
//   res.send ('Hello Express!');
// });


// app.use (middleware.requiredAuthentication);

app.use (middleware.logger);

app.get('/about',middleware.requiredAuthentication, function (req, res) {
  res.send ('About Us!');
});

app.use(express.static(__dirname + '/public'));
console.log (__dirname);


app.listen (portNum, function () {
  console.log ('Express Server Started @ port ' + portNum);
});

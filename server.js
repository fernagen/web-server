var express =require('express');
var app = express();
var portNum = 3000;

// app.get('/',function (req, res) {
//   res.send ('Hello Express!');
// });

var middleware = {
  requiredAuthentication: function (req, res, next) {
    console.log('Private route hit');
    next();
  },
  logger: function (req, res, next){
    console.log (new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
};
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

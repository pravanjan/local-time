const  express = require('express');
const  app = express();
const path = require('path');
const reload = require('reload');
var http = require('http')

var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

var requests;

app.get('/', function(req, res) {
    res.render('index', {
        requests: requests
    });
});

app.set('port', process.env.PORT || 3000)
var server = http.createServer(app)

reload(app).then(function (reloadReturned) {
    // reloadReturned is documented in the returns API in the README
   
    // Reload started, start web server
    server.listen(app.get('port'), function () {
      console.log('Web server listening on port ' + app.get('port'))
    })
  }).catch(function (err) {
    console.error('Reload could not start, could not start server/sample app', err)
  })
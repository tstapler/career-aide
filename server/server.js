'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');
var bodyParser = require('body-parser');
require('shelljs/global');

const {supportedThemes} = require('../common/themes')

var app = module.exports = loopback();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.use(loopback.static(path.resolve(__dirname, '../generated')));

app.use(bodyParser.urlencoded({extended: true}));

app.use(loopback.token());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  app.use('/api/v1/themes', function(req, res, next) {
    res.json({ names: supportedThemes });
  });

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

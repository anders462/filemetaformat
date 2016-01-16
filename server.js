'use strict'
var express = require('express'),
    app = express(),
    dotenv = require('dotenv').config({silent: true}),
    routes = require(process.cwd() + '/app/routes/index.js');

      //set public and bower directory paths relative to server root
    app.use('/bower_components',  express.static(process.cwd() + '/bower_components'));
    app.use('/public',  express.static(process.cwd() + '/public'));
    //set port to env.Port and 3000 as fallback
    app.set('port', (process.env.PORT || 3000));

    routes(app);

    app.listen(app.get('port'), function(){
      console.log("server is running on port " + app.get('port') + "...");
    });

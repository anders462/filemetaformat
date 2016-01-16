var express = require('express'),
    app = express(),
    assert = require('assert');
    bodyParser = require('body-parser');

app.use('/bower_components',  express.static(process.cwd() + '/bower_components'));
app.use('/public',  express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

function errorHandler(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500).render('error_template', { error: err });
};


    assert.equal(null, err);
    console.log("Successfully connected to MongoDB.");

    app.get('/', function(req, res){

        db.collection('movies').find({}).toArray(function(err, docs) {
            res.render('movies', { 'movies': docs } );
        });

    });

    app.post('/movie',function(req,res){
      doc = {"title": req.body.title, "year":req.body.year, "imdb":req.body.imdb};
      db.collection('movies').insert(doc,function(err){
        if(err){
          throw(err)
        } else {
          console.log("new doc inserted in movies collection")
        }
      });
      res.redirect('/');
    });

    app.post('/delete',function(req,res){

    console.log("delete");
    console.log(req.body.title[5]);
    var doc = req.body.title;
      db.collection('movies').remove({"imdb":doc},function(err){
        if(err){
          throw(err)
        } else {
          console.log('doc ' + doc + " has been deleted from collection")
        }
      });

      res.redirect('/');
    });


    app.use(function(req, res){
        res.sendStatus(404);
    });

    var server = app.listen(3000, function() {
        var port = server.address().port;
        console.log('Express server listening on port %s.', port);
    });

});

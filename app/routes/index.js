"use strict"

var multer  = require('multer'),
    upload = multer({ dest: 'uploads/' });

module.exports = function(app){


//main route to serve index.html
app.route("/")
  .get(function(req,res){
    res.sendFile(process.cwd() + '/public/index.html');
  });



  app.post('/load', upload.single('uploadfile'), function (req, res) {

  if (req.file){
    console.log(req.file.size);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,    Accept")
    res.json({"name": req.file.originalname,"size": req.file.size});
  } else {
    res.sendStatus(404);
  }

});



  //all other get request will result in 404 Not Found error beeing displayed
  app.use(function(req, res){
      res.sendStatus(404);
  });
};

"use strict"

$('document').ready(function(){


  $("#myForm").submit(function(event){

  event.preventDefault();
  var myForm = document.querySelector('form');
  var formData = new FormData(myForm);

  var xttp = new XMLHttpRequest();
  xttp.open('POST', '/load',true);

  xttp.onload = function() {
  if (xttp.status >= 200 && xttp.status < 400) {
    //success
    console.log("success");
    console.log(xttp.responseText);
    var data = JSON.parse(xttp.responseText);
    $('#content').append('<tr><td>' + data.name + '</td><td>' + data.size + '</td></tr>')
  } else {
    //reached target but error
      console.log("Error : " + xttp.status);
      $('#content').append('<tr><td>' + "No File Submitted"+ '</td><td>' + "----" + '</td></tr>')

  }
};
  // There was a connection error of some sort
  xttp.onerror = function() {
  console.log("connection error");
};

xttp.send(formData);

});
});

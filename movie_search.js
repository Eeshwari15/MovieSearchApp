var request=require('request');
var ejs = require('ejs');

var express=require("express");
var app=express();
app.set("view engine","ejs");
app.get("/search",function(req,res){
   res.render("search");
});
app.get("/results",function(req,res){
  var query=req.query.search;
  var url="http://omdbapi.com/?s="+query+"&apikey=56068c64";
    request(url,function(error,response,body){
      if(!error && response.statusCode==200)
      
      b=JSON.parse(body);
      res.render("results",{b:b});        
    
      
    });
    
    console.log("chal rha");
});

app.listen(3000,function(){
    console.log("Movie app has started");
});
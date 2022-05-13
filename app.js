const express = require("express");
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const read = require("body-parser/lib/read");
const _ = require("lodash");
const { stringify } = require("nodemon/lib/utils");
const req = require("express/lib/request");
const { required } = require("nodemon/lib/config");
const { redirect } = require("express/lib/response");
const { name } = require("ejs");
const res = require("express/lib/response");
const { use } = require("express/lib/router");
const app = express();
app.use(bodyParse.urlencoded({ extended: true }));
app.use(express.static(__dirname));
console.log(__dirname);
app.get("/favicon.ico", function (req, res) {
  res.status(204);
  res.end();
});
const r1=["hey"];
app.set("view engine", "ejs"); //using ejs & creating a new dir (views/list.ejs)

app.get("/",function(req,res){
  res.render("grid");
  console.log(r1);
})
app.post("/",function(req,res){
  const n=req.body.item;
  console.log(n) 


  

})
app.listen(3000,function(){
  console.log("SERVER UP");
})































const express = require("express");
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const read = require("body-parser/lib/read");
// mongoose.connect('mongodb+srv://admin-shubham:test123@cluster0.a5w6k.mongodb.net/todo', {useNewUrlParser: true});
mongoose.connect("mongodb://localhost:27017/TT", { useNewUrlParser: true });
// const date = require(__dirname+"/date.js");
const _ = require("lodash");
const { stringify } = require("nodemon/lib/utils");
const req = require("express/lib/request");
const { required } = require("nodemon/lib/config");
const { redirect } = require("express/lib/response");
const { name } = require("ejs");
const res = require("express/lib/response");
const { use } = require("express/lib/router");
const app = express();

app.set("view engine", "ejs"); //using ejs & creating a new dir (views/list.ejs)

app.get("/",function(req,res){
  res.render("grid");
})
app.listen(3000,function(){
  console.log("SERVER UP");
})































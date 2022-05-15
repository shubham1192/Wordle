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
const r1="water";
const alphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
app.set("view engine", "ejs"); //using ejs & creating a new dir (views/list.ejs)
var count=-1;
var found=[];
var colors=[];
app.get("/",function(req,res){
  count++
  res.render("grid",{count:count,letters:found,colors:colors});
  console.log(r1);
  console.log(found);
  console.log(count);

})
String.prototype.replaceAt = function(index, replacement) {
  return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
app.post("/",function(req,res){
  let c=[];
  const arr=req.body.item;//! Jo le rhe hai hum
  let s="";
  for(var i=0;i<arr.length;i++)
  {
    s+=arr[i];
  }
  found.push(arr);
  //! Step 1(Matching the string)
  if(s==r1)
  {
    //! All green 
    console.log("Step-1");
    for(var i=0;i<s.length;i++)
    {
      c.push(1);
    }
    colors.push(c);
  }
  else 
  {

    var a = r1;

      for(var i=0;i<a.length;i++)
      {
        if(a[i]===s[i])
        {
          c.push(1);
        
          s = s.replace(s[i],'/');
          a = a.replace(a[i],'/');
          console.log(s,a);
          continue;
        }
        var check=false;
        for(var j=0;j<s.length;j++)
        {
          if(s[i]===a[j])
          {
            s = s.replace(s[i],'/');
            a = a.replace(a[j],'/');
            console.log(s,a);
            // Making it yellow
            c.push(2);
            check=true;
            break;
          }
        }
        if(check===false)
        {
          // Making it red
          c.push(3);
        }
      }
    console.log("This is the color array ", c);
    colors.push(c);
  }
console.log(colors)
  res.redirect("/")

})
app.listen(3000,function(){
  console.log("SERVER UP");
})

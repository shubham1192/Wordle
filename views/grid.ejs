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
const r1="WATER";
const alphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
app.set("view engine", "ejs"); //using ejs & creating a new dir (views/list.ejs)
var count=0;
var success=0;
var found=[];
const F=[]
var colors=[];
var C=[]
var finalCount=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var SuccessCount=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var visit=0;
app.get("/",function(req,res){

  console.log(visit)
  res.render("start");
})

app.get("/:visit",function(req,res){
  // count++
  var a = req.params['visit'];
  console.log("This is the a: ",a);
  res.render("grid",{count:finalCount[a-1],letters:F,Colors:C,
  success:SuccessCount[a-1],visitor:req.params['visit'],item:found});
  // console.log(r1);
  // console.log(F);
  // console.log(count);
})

app.post("/",function(req,res){
  let c=[];
  const u = req.body.visitor;
  finalCount[u-1]++;
  console.log("This is the final count: ",finalCount[u-1]);
  console.log("This is the Uth ",u);
  var arr=req.body.item;//! Jo le rhe hai hum
  var up=arr.map(x=> x.toUpperCase())
  console.log("This is the indexing ", F[u-1]);
  if(F[u-1]===undefined)
  {
    
  }
  else
  {
    found=F[u-1];
    console.log("This is the found array: ",found);
  }
  let s="";
  for(var i=0;i<arr.length;i++)
  {
    s+=up[i];
  }

  found.push(up);
  

  if(F[u-1]===undefined)
  {
    F.push(found)   
  }
  else
  {
    F[u-1]=found;
  }  
  console.log(count);
  console.log('This is the F array ',F);
  //! Step 1(Matching the string)
  
  if(s==r1)
  {
    //! All green 
    console.log("Step-1");
    for(var i=0;i<s.length;i++)
    {
      c.push(1);
    }
    if(C[u-1]===undefined)
    {

    }
    else
    {
      colors=C[u-1];
    }
    colors.push(c);
    // 
    if(C[u-1]===undefined)
    C.push(colors)
    else
    C[u-1]=colors;
    SuccessCount[u-1]=1;
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
    if(C[u-1]===undefined)
    {

    }
    else
    {
      colors=C[u-1];
    }
    colors.push(c);
    // 
    if(C[u-1]===undefined)
    C.push(colors)
    else
    C[u-1]=colors;

    console.log("This is the important color array ",C);
  }
console.log(colors)
  res.redirect("/"+u)

})
app.post("/begin",function(req,res){
  visit++;
  // count=0;
  // success=0;
 found=[];
  colors=[];
  res.redirect("/"+visit)
})
app.post("/play",function(req,res){
  
  // count=0;
//  success=0;
 found=[];
 colors=[];
  res.redirect("/")
})
app.listen(3000,function(){
  console.log("SERVER UP");
})

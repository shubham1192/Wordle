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
const r1="tamtft";
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
      var characters={};
      var answer={};
      for(var i = 0;i<26;i++)
      {
        var count=0;
        characters[alphabets[i]]=count;
        answer[alphabets[i]]=count;
      }
      for(var i=0;i<s.length;i++)
      { 
        var ch = s.charAt(i); // tipsy   ltette
        var ch1 = r1.charAt(i);// water  water
        if(ch!=ch1)
        {
        // mp[s[i]]++
          characters[ch]++;
          answer[ch1]++;
        }
        else
        {
          //! Step 2 (correct position)
            console.log(ch);
            c.push(1);
           // Make the box green means it is on the correct position
        }
      }
      //! Step 3(check if any char matches)
      // console.log(characters);
      // console.log(answer);

      var txt=r1;
      for(var i=0;i<s.length;i++)
      {
        let res=txt.includes(s[i]);
        if(res===true)
        {
          c.push(2);
          const index=txt.indexOf(s[i]);
          txt[index]='/'
        }
        else 
        {
          c.push(3)
        }
      }
      colors.push(c)



      // for(var i = 0;i<26;i++)
      // {
      //   // console.log(alphabets[i1]);
      //   if(characters[alphabets[i]]!==0 && answer[alphabets[i]]!==0)
      //   {
      //     var mini = Math.min(characters[alphabets[i]],answer[alphabets[i]]);
      //     console.log(alphabets[i],characters[alphabets[i]],answer[alphabets[i]]);
      //     while(mini--)
      //     {
      //       var idx=[];
      //       for(var j=0;j<s.length;j++)
      //       {
      //         //! T
      //         //* L A T T T E    [2,4] 
      //         //* T A M T F T
      //         if(s[j]!=r1[j] && s[j]===alphabets[i] && (idx.find(element=>element==j)===undefined))
      //         { 
      //             idx.push(i);
      //             c.push(2);
      //             break;
      //             // Make it yellow means the correct char exists but not on the correct position 
      //         }
      //       }
      //     }
      //     characters[alphabets[i]]-=mini;
      //     answer[alphabets[i]]-=mini;
      //   }
      //   else
      //   {
      //     // Non exsisting
      //     console.log("Ghanta same na hai")
      //     // c.push(3)
      //   }
      // }
      // colors.push(c);



  }
// count++;
//   console.log(count);
console.log(colors)
  res.redirect("/")

})
app.listen(3000,function(){
  console.log("SERVER UP");
})









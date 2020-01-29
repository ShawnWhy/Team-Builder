const fs = require("fs");
const inquirer=require("inquirer");
const mainIndex=require("../index.js");

// var newEmployeePosition=mainIndex.newEmployeePosition;
var newEmployeeName=mainIndex.newEmployeeName;
var newEmployeeEmail=mainIndex.newEmployeeEmail;

var newEmployeePosition="engineer"



function secondhalf(){
    console.log(newEmployeePosition);
    fs.readFile(`./templates/${newEmployeePosition}.html`,"utf8",function(err,data){
       if(err) {throw err;}
   var newdata="`"+data+"`";
   console.log("log"+newdata);
fs.appendFile("./output/webpage.html",newData,"utf8",function(err){
    console.log(data);
    if(err){throw err;}

     inquirer.prompt(
        {type:"list",
        message:"are there any more people on the team?",
        name:"continue",
        choices:[
            "yes",
            "no"
        ]}
    ).then(function(data){
        switch(data.continue){
            case "yes":
                getEmployee();break;
            case "no":
                fs.appendFile("./output/webpage.html",`</body></html>`,"utf8",function(err){
                    if(err){throw err;}
                });
                break;
            }

})})})};

module.exports=secondhalf;
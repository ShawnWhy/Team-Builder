 const employee= require("./employee"); 
 const inquirer = require("inquirer");
 const axios = require("axios");
//  const secondhalf=require("./secondhalf")
 const fs=require("fs");

 class manager extends employee{
     constructor(name,email,mainfunction){
         super(name, email,"manager",mainfunction);
         this.name=name;
         this.email=email;
         this.mainfunction=mainfunction;
         

     }
    
     getInformation(){
         inquirer.prompt(
             {type:"input",
                name:"GitHub",
            message:"what is your GitHub Account Name?"},
           
         ).then((data)=>{
            this.GitHub=data.GitHub
            // console.log(this.GitHub);
            this.deployinformation();


         })
        }

    deployinformation(){
        
     fs.appendFile("./output/webpage.html",`<div class="profile-container" >
     <div class="logo-container"><img><img></div>
     <div class="name">${this.name}</div>
     <div class="line"></div>
     <div class="position">position:${this.position}</div>
     <div class="line"></div>
     <div class="email"><b>email:</b><br>${this.email}</div>
     <div class="information"><b>GitHub:</b><a href="http://Github.com/${this.GitHub}">${this.GitHub}</a></div>
     </div>`,"utf8",function(err){
         
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
                     this.getEmployee();break;
                 case "no":
                     fs.appendFile("./output/webpage.html",`</body></html>`,"utf8",function(err){
                         if(err){throw err;}
                     });
                     break;
    }
       
         

     
 })})}}

module.exports = manager;

//  await inquirer.prompt([{
//     type:"input",
//     name: "employeeName",
//     message:"what is your name?"
// },

// {type:"list",
// message:"what is your position",
// name:"employeePosition",
// choices:[
//     "manager",
//     "engineer",
//     "intern",
//     "designer"
// ]}])
// .then (function(data){
//      newEmployeeName = data.employeeName;
//      newEmployeePosition= data.employeePosition;

function secondhalf(){
    fs.readFile(`./templates/${newEmployeePosition}.html`,"utf8",function(err,data){
       if(err) {throw err;}
   
   console.log(data);
fs.appendFile("./output/webpage.html",data,"utf8",function(err){
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
        
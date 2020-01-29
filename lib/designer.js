const employee= require("./employee"); 
const inquirer = require("inquirer");
const axios = require("axios");
const fs=require("fs");

class designer extends employee{
    constructor(name,email,){
        super(name, email,"designer");
        this.name=name;
        this.email=email;

    }
    getInformation(){
        inquirer.prompt(
            {type:"input",
               name:"portfolio",
           message:"please provide your online portfolio"},
          
        ).then((data)=>{
            this.portfolio=data.portfolio;
            console.log(this.portfolio);
            console.log(designer);
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
     <div class="email"><b>email:</b><br>${newEmployee.email}</div>
     <div class="information"><b><a href="http://${this.portfolio}">portfolio</a></b></div>
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
                     getEmployee();break;
                 case "no":
                     fs.appendFile("./output/webpage.html",`</body></html>`,"utf8",function(err){
                         if(err){throw err;}
                     });
                     break;
    }
       
         

     
 })})}}


    module.exports = designer;
      
        
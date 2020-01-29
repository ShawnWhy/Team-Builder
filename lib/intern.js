const employee= require("./employee"); 
const inquirer = require("inquirer");
const axios = require("axios");
const fs=require("fs");

class intern extends employee{
    constructor(name,email){
        super(name, email,"intern");
        this.name=name;
        this.email=email;
        

    }
    getInformation(){
        inquirer.prompt(
            {type:"input",
               name:"school",
           message:"from what school did you graduate from?"},
          
        ).then((data)=>{
             this.school=data.school;
             console.log(this.GitHub);
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
        <div class="information"><b>graduated from: </b>${this.school}</div>
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

    module.exports = intern;
      
    // exports.getName = getName;
    // exports.getLocation = getLocation;
    // exports.dob = dateOfBirth;
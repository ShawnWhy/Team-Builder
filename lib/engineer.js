const employee= require("./employee"); 
const inquirer = require("inquirer");
const axios = require("axios");
const fs=require("fs");

class engineer extends employee{
    constructor(name,email){
        super(name, email,"engineer");
        this.name=name;
        this.email=email;
        

    }
    getInformation(){
        inquirer.prompt(
            {type:"input",
               name:"GitHub",
           message:"what is your GitHub Account Name?"},
          
        ).then((data)=>{
             this.GitHub=data.GitHub;
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
        <div class="email"><b>email:</b><br>${newEmployee.email}</div>
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
                        getEmployee();break;
                    case "no":
                        fs.appendFile("./output/webpage.html",`</body></html>`,"utf8",function(err){
                            if(err){throw err;}
                        });
                        break;
       }
          
            
   
        
    })})}}
      
    module.exports = engineer;
    

    // 
//     class employee {
//         constructor(name,email, position){
//             this.name=name;
//             this.email=email;
//             this.position=position
//         }}
        
    
//     class engineer extends employee{
//         constructor(name,email){
//             super(name, email,"engineer");
//             this.name=name;
//             this.email=email;
    
//         }
//         getInformation(){
//             inquirer.prompt(
//                 {type:"input",
//                    name:"GitHub",
//                message:"what is your GitHub Account Name?"},
              
//             ).then((data)=>{
                 
//                  console.log(data.GitHub);
//                  this.GitHub=data.GitHub;
//                  console.log(this.GitHub);
//                  console.log(this);
//             })
//            }
//         }

// var newEngineer = new engineer("shawn", "sdsd");
// newEngineer.getInformation();
// async function dude(){try{await( newEngineer.getInformation()) 
// .then( console.log(newEngineer))}  

// catch(err){
//     console.log(err);
// }
// }

// module.exports = engineer;
            
    
        
    
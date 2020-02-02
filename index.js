const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");
// const employee = require(".\lib/employee");
// const manager = require("./lib/manager");
// const intern = require("./lib/intern");``
// const engineer = require("./lib/engineer");
// const designer = require("./lib/designer");
var newEmployee;

var newEmployeeName;
var newEmployeePosition;
var newEmployeeEmail;
var newEmployeeGitHub;
var newEmployeeSchool;
var newEmployeePortfolio; 
var newEmployeeSchool;

asyncReadFile= util.promisify(fs.readFile); 
asyncWriteFile=util.promisify(fs.appendFile);
asyncAppendFile = util.promisify(fs.appendFile);



function getInformationEngineer(){
    inquirer.prompt(
        {type:"input",
           name:"GitHub",
       message:"what is your GitHub Account Name?"},
      
    ).then((data)=>{ 
        console.log(data.GitHub)
    if(data.GitHub==data.GitHub){
        newEmployeeGitHub=data.GitHub;
            deployinformationEngineerManager(newEmployeeGitHub)}}
            
        )};
function getInformationManager(){
    inquirer.prompt(
        {type:"input",
           name:"GitHub",
       message:"what is your GitHub Account Name?"},
      
    ).then((data)=>{ 
        console.log(data.GitHub)
    if(data.GitHub==data.GitHub){
        newEmployeeGitHub=data.GitHub;
            deployinformationEngineerManager(newEmployeeGitHub)}}
            
        )
}

function getInformationIntern(){
    inquirer.prompt(
        {type:"input",
           name:"school",
       message:"what School did you go to?"},
      
    ).then((data)=>{ 
        console.log(data.GitHub)
    if(data.GitHub==data.GitHub){
        newEmployeeSchool= data.school; 

            deployinformationIntern(newEmployeeSchool)}}
            
        )
}


 function deployinformationIntern(){
    fs.appendFile(  "./output/webpage.html",`<div class="profile-container" >
    <div class="logo-container"><img><img></div>
    <div class="name">${newEmployeeName}</div>
    <div class="line"></div>
    <div class="position">position:${newEmployeePosition}</div>
    <div class="line"></div>
    <div class="email"><b>email:</b><br>${newEmployeeEmail}</div>
    <div class="information"><b>Alma Mater:${newEmployeeSchool}</a></div>
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
                        if(err){throw err;};
                        console.log("completed TeamProfile");
                    });
                    break;
   }
})})}
function getInformationDesigner(){
    inquirer.prompt(
        {type:"input",
           name:"portfolio",
       message:"please provide your online portfolio"},
      
    ).then((data)=>{ 
        console.log(data.portfolio)
    if(data.portfolio==data.portfolio){
        newEmployeePosition= data.portfilio;

            deployinformationDesigner(newEmployeePortfolio)}}
            
        )
}


function deployinformationDesigner(){
    fs.appendFile(  "./output/webpage.html",`<div class="profile-container" >
    <div class="logo-container"><img><img></div>
    <div class="name">${newEmployeeName}</div>
    <div class="line"></div>
    <div class="position">position:${newEmployeePosition}</div>
    <div class="line"></div>
    <div class="email"><b>email:</b><br>${newEmployeeEmail}</div>
    <div class="information"><b>portfolio:</b><a href=${newEmployeePortfolio}>${newEmployeePortfolio}</a></div>
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
                        if(err){throw err;};
                        console.log("completed TeamProfile");
                    });
                    break;
   }
})})}
   
   function deployinformationEngineerManager(newEmployeeGitHub){
    
    fs.appendFile(  "./output/webpage.html",`<div class="profile-container" >
    <div class="logo-container"><img><img></div>
    <div class="name">${newEmployeeName}</div>
    <div class="line"></div>
    <div class="position">position:${newEmployeePosition}</div>
    <div class="line"></div>
    <div class="email"><b>email:</b><br>${newEmployeeEmail}</div>
    <div class="information"><b>GitHub:</b><a href="http://Github.com/${newEmployeeGitHub}">${newEmployeeGitHub}</a></div>
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
                        if(err){throw err;};
                        console.log("completed TeamProfile");
                    });
                    break;
   }
})})}
      


        

async function getEmployee(){
try{
    await inquirer.prompt([{
        type:"input",
        name: "employeeName",
        message:"what is your name?"
    },
    {type:"input",
    name:"employeeEmail",
    message:"please enter your email address"},

    {type:"list",
    message:"what is your position",
    name:"employeePosition",
    choices:[
        "manager",
        "engineer",
        "intern",
        "designer"
    ]}])
    .then (function(data){
         newEmployeeName = data.employeeName;
         newEmployeeEmail = data.employeeEmail;
         newEmployeePosition= data.employeePosition;
         console.log(newEmployeePosition);


    })
        // console.log(newEmployeeName+newEmployeePosition)

    .then(()=>{  switch(newEmployeePosition){
        
        case"manager":
            getInformationManager();             

            break;
       
            case"engineer":
             getInformationEngineer();
         
            

            break;
        
            case"intern":
            getInformationIntern();
            break;
            
       
            case"designer":
            getInformationDesigner();
            
            break;
        
 }
})




 


}

    catch(err){
        console.log(err);
}}  
        getEmployee();

        module.exports={
            getEmployee:getEmployee
        }

    // await inquirer.prompt({
    //     type:"input",
    //     name:"favoriteColor",
    //     message:"what is your favoriteColor?",})
    // .then (function(data){console.log(data.favoriteColor);
    //     color=data.favoriteColor;
    //     console.log(color);
    //     if(colorunder.indexOf(color.toLowerCase())==-1){
    //         throw("must be a color");
    //     }} ) 
    // .then(function(){



// inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?"
//     },
//     {
//       type: "checkbox",
//       message: "What languages do you know?",
//       name: "stack",
//       choices: [
//         "HTML", 
//         "CSS", 
//         "JavaScript", 
//         "MySQL"
//       ]
//     },
//     {
//       type: "list",
//       message: "What is your preferred method of communication?",
//       name: "contact",
//       choices: [
//         "email",
//         "phone",
//         "telekinesis"
//       ]
//     }

// fs.readFile("animals.json", "utf8", function(err, data) {
//     if (err) {
//       throw err;
//     }
  
    // Parse the JSON string to an object
    // const animalJSON = JSON.parse(data);


//     exports.getName = getName;
// exports.getLocation = getLocation;
// exports.dob = dateOfBirth;
// var pie = "apple";
// var cat="molly";

// var predictable = function(){
//   return 1;
// }

// // module.exports is an object we use to store variables or methods
// module.exports = {
//   mycat:cat,
//   pie: pie,
//   predictable: predictable
// };


// module.exports = new Promise ((resolve, reject) => {
//     mysql.query('SELECT id, name FROM news', (error, results) => {
//       if (error)
//         reject({error: `DB Error: ${error.code} (${error.sqlState})`})
  
//       resolve(JSON.parse(JSON.stringify(results)));
//     });
//   });

//   module.exports = async () => {
//     try {return await query('SELECT id, name FROM news')} finally {conn.end()}
//   }
  
//   module.exports = async()=>(try{await newEmployeePosition.then(
//     newEmployeePosition:newEmployeePosition),
//     newEmployeeEmail:newEmployeeEmail,
//     newEmployeeName:newEmployeeName};
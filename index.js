const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");
// const employee = require(".\lib/employee");
const manager = require("./lib/manager");
const intern = require("./lib/intern");``
const engineer = require("./lib/engineer");
const designer = require("./lib/designer");
var newEmployee;

var newEmployeeName;
var newEmployeePosition;
var newEmployeeEmail;

asyncReadFile= util.promisify(fs.readFile); 
asyncWriteFile=util.promisify(fs.appendFile);
asyncAppendFile = util.promisify(fs.appendFile);
// const employeeList=[];

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
             newEmployee=new manager(newEmployeeName,newEmployeeEmail);
            newEmployee.getInformation()in
            console.log(newEmployee);
            // setTimeout(secondhalf(),200);
            ;

            break;
       
            case"engineer":
             newEmployee=new engineer(newEmployeeName,newEmployeeEmail)
            newEmployee.getInformation();
            

            break;
        
            case"intern":
             newEmployee=new intern(newEmployeeName,newEmployeeEmail)
            newEmployee.getInformation();
            break;
       
            case"designer":
             newEmployee=new designer(newEmployeeName,newEmployeeEmail)
            newEmployee.getInformation();
            
            break;
        
 }
})
secondhalf(newEmployeePosition, newEmployeeEmail, newEmployeeName);



 


}

    catch(err){
        console.log(err);
}}
        getEmployee();

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
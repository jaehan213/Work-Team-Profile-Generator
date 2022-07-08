import {Manager} from './lib/manager.js';
import {Engineer} from './lib/engineer.js';
import {Intern} from './lib/intern.js';

import inquirer from 'inquirer'
import fs from 'fs'

var employees = [];
var htmlContent = ``;
inquirer
    .prompt([
    {
        name: "name",
        type: "input",
        message: "Team Manager's Name:",
    },
    {
        name: "employeeID",
        type: "input",
        message: "Employee ID:",
    },
    {
        name: "email",
        type: "input",
        message: "Email Address:",
    },
    {
        name: "office",
        type: "input",
        message: "Office Number:",
    },
    {
        name: "new",
        type: "list",
        choices: ["Engineer", "Intern", "None. Complete build..."],
        message: "Who would you like to add to the team?",
    }
    ])
    .then(data => {
        const manager = new Manager(data.name, data.employeeID, data.email, data.office)
        employees.push(manager);
        let next = data.new;
        if(next=="Engineer" || next == "Intern"){
            anotherOne(next);
        }
    })

function updateHTML(employees){
    const firstHalf = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        <header style="background-color: red; text-align: center;">
            <h1>My Team</h1>
        </header>
        <div class="d-flex p-2 flex-row justify-content-center" id = "cards-container">`;
    const latterHalf = `</div>
    </body>
    </html>`;
    var stringHTML = ``;
    for(let i = 0; i < employees.length; i++){
        if(employees[i].constructor.name == "Engineer"){
            stringHTML+=`
            <div class="card mx-3" style="width: 18rem;">
            <div class="card-body bg-primary">
              <h2 class="card-title">${employees[i].name}</h2>
              <h4 class="card-text">Engineer</h4>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${employees[i].id}</li>
              <li class="list-group-item">Email: <a href="mailto:${employees[i].email}">${employees[i].email}</a></li>
              <li class="list-group-item">Github: <a href="https://github.com/${employees[i].github}" target="_blank">${employees[i].github}</a></li>
            </ul>
            </div>
            `;
        }
        if(employees[i].constructor.name == "Intern"){
            stringHTML+=`
            <div class="card mx-3" style="width: 18rem;">
            <div class="card-body bg-primary">
              <h2 class="card-title">${employees[i].name}</h2>
              <h4 class="card-text">Intern</h4>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${employees[i].id}</li>
              <li class="list-group-item">Email: <a href="mailto:${employees[i].email}">${employees[i].email}</a></li>
              <li class="list-group-item">School: ${employees[i].school}</li>
            </ul>
            </div>
            `;
        }
        if(employees[i].constructor.name == "Manager"){
            stringHTML+=`
            <div class="card mx-3" style="width: 18rem;">
            <div class="card-body bg-primary">
              <h2 class="card-title">${employees[i].name}</h2>
              <h4 class="card-text">Manager</h4>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${employees[i].id}</li>
              <li class="list-group-item">Email: <a href="mailto:${employees[i].email}">${employees[i].email}</a></li>
              <li class="list-group-item">Office Number: ${employees[i].office}</li>
            </ul>
            </div>
            `;
        }
    }
    return firstHalf + stringHTML + latterHalf;
}
    
function anotherOne(next){
    if(next == "Engineer"){
        inquirer.prompt([
            {
                name: "name",
                type: "input",
                message: "Engineer's Name:",
            },
            {
                name: "employeeID",
                type: "input",
                message: "Employee ID:",
            },
            {
                name: "email",
                type: "input",
                message: "Email Address:",
            },
            {
                name: "github",
                type: "input",
                message: "Github:",
            },
            {
                name: "next",
                type: "list",
                choices: ["Engineer", "Intern", "None. Complete build..."],
                message: "Who would you like to add to the team?",
            }
        ])
        .then(data => {
            const engineer = new Engineer(data.name, data.employeeID, data.email, data.github);
            employees.push(engineer);
            if(data.next=="Engineer" || data.next == "Intern"){
                anotherOne(data.next);
            }else{
                fs.writeFile('./dist/index.html', updateHTML(employees), (error) => { /* handle error */ });
            }
        })
    }else{
        if(next == "Intern"){
            inquirer.prompt([
                {
                    name: "name",
                    type: "input",
                    message: "Intern's Name:",
                },
                {
                    name: "employeeID",
                    type: "input",
                    message: "Employee ID:",
                },
                {
                    name: "email",
                    type: "input",
                    message: "Email Address:",
                },
                {
                    name: "github",
                    type: "input",
                    message: "School:",
                },
                {
                    name: "next",
                    type: "list",
                    choices: ["Engineer", "Intern", "None. Complete build..."],
                    message: "Who would you like to add to the team?",
                }
            ])
            .then(data => {
                const intern = new Intern(data.name, data.employeeID, data.email, data.github);
                employees.push(intern);
                if(data.next=="Engineer" || data.next == "Intern"){
                    anotherOne(data.next);
                }else{
                    fs.writeFile('./dist/index.html', updateHTML(employees), (error) => { /* handle error */ });
                }
            })
        }
    }
}
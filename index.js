const inquirer = require("inquirer");
const fs = require("fs");

const htmlTemplate = (questions) =>
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>IndexFile Generator</title>
    </head>
    <body>
      <header>
        <h1>Welcome to ${questions.name}'s page</h1>
        
      </header>
      <main>
      <h2>I am from ${questions.location}</h2>
        <h3>My LinkedIn Url is ${questions.linkedin}</h3>
        <h4>My GitHub URL is ${questions.github}</h4>
      </main>
    </body>
  </html>`;

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "location",
    message: "What is your location?",
  },
  {
    type: "input",
    name: "linkedin",
    message: "What is your LinkedIn URL?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub URL?",
  },
];

inquirer.prompt(questions).then((answers) => {
  fs.writeFile("index.html", htmlTemplate(answers), (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
});

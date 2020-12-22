var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

var scienceQuiz = [
  {question: "What is a force?",option:["Weight","Tendency for an object to resist a change in motion","A Push or a Pull", "Mass"], answer: "A Push or a Pull"},
  {question: "Which form of the sun’s energy provides solar power?", option:["Neither", "Heat","Both", "Light"], answer: "Light"},
  {question: "How does your brain deliver messages throughout the body?",option:["Nerves", "Veins","Arteries", "Muscles"], answer: "Nerves"},
  {question: "What type of scientist studies motion?",option:["Geologist", "Chemist","Biologist", "Physicist"], answer: "Physicist"}
];

var userName = readlineSync.question("Let's play " + chalk.yellow("science quiz") + " ! Type your name:");

console.log("Welcome " + chalk.yellow(userName) + ".");


for(let i=0; i<scienceQuiz.length; i++){
  QnA(scienceQuiz[i].question,scienceQuiz[i].option, scienceQuiz[i].answer);
}

// function
function QnA(question,options,answer) {
  console.log(" ");
  console.log(question);

  for(i=0; i<options.length; i++){
    console.log(options[i]);
  }
  var userAnswer = readlineSync.question("Your answer : ");
  
  console.log("You typed " + chalk.blue(userAnswer)); 

  if(userAnswer == answer){
  console.log("You are " + chalk.greenBright("right !"));
  score++;
  }
  else {
  console.log("Your answer is " + chalk.redBright("wrong :("));
  }
  console.log("Your score: " + chalk.yellow(score));
};

console.log("Thanks for answering ! Your score is " + chalk.blue(score + "/" + scienceQuiz.length));


console.log(" ");
// console.log(chalk.magenta("Checkout the highest scorers :") );
// console.log(chalk.blueBright(highScorer[0].name + ' ' + highScorer[0].score) );
// console.log(chalk.yellowBright(highScorer[1].name + ' ' + highScorer[1].score) );
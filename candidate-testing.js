const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ' ';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = ' ';


//TODO: Variables for Part 2
let questions =["Who was the first American woman in space?", 
"True or False: 5 kilometer == 5000 meters?", 
"(5 + 3) / 2 * 10 = ?", 
"Given the array [8, 'orbit', 'Trajectory', 45], what entry is at index 2?", 
"What is the minimum crew size for the ISS?"];
let correctAnswers =["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter Candidate Name: ");
//console.log(candidateName);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(let i=0; i<5; i++) {
    //console.log(questions[i]);
    candidateAnswers[i] = input.questions[i](questions[i]);
  }
  //candidateAnswer1 = input.question1(question1);
}

function gradeQuiz(candidateAnswers1) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  if(candidateAnswer == correctAnswer) {
    console.log("correct answer");
  } else {
    console.log("incorrect answer");
  }
}

// function gradeQuiz(candidateAnswers3) {

//   // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//   if(candidateAnswer3 == correctAnswer3) {
//     console.log("correct answer3");
//   } else {
//     console.log("incorrect answer3");
//   }

//   candidateAnswer3 = input.question3(question3);
// }

// function gradeQuiz(candidateAnswers3) {

//   // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//   if(candidateAnswer1 == correctAnswer1) {
//     console.log("correct answer3");
//   } else {
//     console.log("incorrect answer3");
//   }

//   let grade;  //TODO 3.2 use this variable to calculate the candidates score.


//   return grade;
// }

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Welcome " +candidateName);
  askQuestion();
  //gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
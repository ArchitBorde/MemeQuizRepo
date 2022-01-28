var readlineSync = require("readline-sync");

var score =0;

var highScores = [
  {
    name: "Baburao",
    score:7
  },
  {
    name:"Archit",
    score:6
  }
]

function quiz(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are right!");
    score = score + 1;
  } else{
    console.log("You are wrong!")
  }

}

var questions = [{
  question:"Which is the famous meme about risk in hera pheri? ",
  answer:"bilkul risk nai leneka"
},
{
  question:"kya kar lenge thoda?",
  answer:"seh lenge thoda"
},
{
  question:"kya kiye ?",
  answer:"koot diye"
},
{
  question:"kitna rupaiya dega?",
  answer:"150"
},
{
  question:"kya ---- banega re tu?",
  answer:"gunda"
},
{
  question:"kiska badla lega tera faizal?",
  answer:"sabka"
},
{
  question:"kya tod saale ka?",
  answer:"khopdi"
}
]

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}

if(score===highScores[0].score){
  console.log("You've beaten the highest score!")
} else{
  var diff = highScores[0].score-score;
  console.log("You just missed the high score by "+diff+ " points! Better luck next time!")
}

 console.log("Your score is : "+score);
 console.log("The highest score is " +highScores[0].score);
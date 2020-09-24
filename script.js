//main hooks
var mainCard = document.getElementById("main-card")

var startBtn = document.getElementById("startButton");
startBtn.style.display = "block";

var questionEl = document.getElementById("question");
questionEl.style.display = "none";

//score list hook 
var scoreCard = document.getElementById("scorecard");
scorecard.style.display = "none";
var yourScore = document.getElementById("your-score");
var inputName = document.getElementById("input-name");
var submitButton = document.querySelector(".submit-button");
var scoreList = document.getElementById("scoreList");
var clearButton = document.getElementById("clear-button")

//timer hook
var timer = document.getElementById("time-left");

//correct/incorrect hook
var correctIncorrect = document.getElementById("correct-incorrect");

// Button divs for styling
var btn1 = document.getElementById("button1");
btn1.style.display = "none";
var btn2 = document.getElementById("button2");
btn2.style.display = "none";
var btn3 = document.getElementById("button3");
btn3.style.display = "none";
var btn4 = document.getElementById("button4");
btn4.style.display = "none";

//answer button hooks
var answerA = document.getElementById("A")
var answerB = document.getElementById("B")
var answerC = document.getElementById("C")
var answerD = document.getElementById("D")


//  QUESTIONS
var questions = ["Which country's capital city is named Lisbon?","Where is the Great Pyramid of Giza located?","What is the world's largest continent?","What is the official language of the Canadian province Quebec?","What body of water separates Spain from the continent of Africa?"]
var answers = [["Spain","France","Portugal","Argentina",],["Nigeria","Egypt","Saudi Arabia","Turkey"],["Asia","Africa","China","North America"],["Canadian","Spanish","French","German"],["Cape Cod","Pacific Ocean","Caspian Sea","Bering Strait"]]
var correctAnswers = ["Portugal","Egypt","Asia","French","Bering Strait",]
//console.log(questions[3])
//     

startBtn.addEventListener("click", begin)


//when begin button is clicked
function begin(){
    startBtn.style.display = "none";
    questionEl.style.display = "block";
    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.style.display = "block";
    btn4.style.display = "block";
    startTimer()
    askQuestion();
    
} 



var counter = 0

function askQuestion(){
    if(counter<5){
    questionEl.textContent = questions[counter];
    answerA.textContent = answers[counter][0];
    answerB.textContent = answers[counter][1];
    answerC.textContent = answers[counter][2];
    answerD.textContent = answers[counter][3];
    }else if(counter == 5){
        highScores()
    }
        
    
}


function selectAnswerA(){
    if(answers[counter][0] == correctAnswers[counter]){
        correctIncorrect.textContent = "Correct";
        correctIncorrect.style.color = "green"
        counter++;
        askQuestion();

    }else{
        correctIncorrect.textContent = "Incorrect";
        correctIncorrect.style.color = "red"
        counter++;
        wrongAnswer();
        askQuestion();
    }
}
function selectAnswerB(){
    if(answers[counter][1] == correctAnswers[counter]){
        correctIncorrect.textContent = "Correct";
        correctIncorrect.style.color = "green"
        counter++;
        askQuestion();
    }
    else{
        correctIncorrect.textContent = "Incorrect";
        correctIncorrect.style.color = "red"
        counter++;
        wrongAnswer();
        askQuestion();
    }
}
function selectAnswerC(){
    if(answers[counter][2] == correctAnswers[counter]){
        correctIncorrect.textContent = "Correct";
        correctIncorrect.style.color = "green"
        counter++;
        askQuestion();
    }else{
        correctIncorrect.textContent = "Incorrect";
        correctIncorrect.style.color = "red"
        counter++;
        wrongAnswer();
        askQuestion();
    }
}
function selectAnswerD(){
    if(answers[counter][3] == correctAnswers[counter]){
        correctIncorrect.textContent = "Correct";
        correctIncorrect.style.color = "green"
        counter++;
        askQuestion();
    }else{
        correctIncorrect.textContent = "Incorrect";
        correctIncorrect.style.color = "red"
        counter++;
        wrongAnswer();
        askQuestion();
    }
}


// call next question with button event listeners
answerA.addEventListener("click", selectAnswerA)
answerB.addEventListener("click", selectAnswerB)
answerC.addEventListener("click", selectAnswerC)
answerD.addEventListener("click", selectAnswerD)


//timer function
var secondsLeft = 50;

function wrongAnswer(){
    secondsLeft = secondsLeft-10;
}

function startTimer() {
  
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;

    
    if(secondsLeft === 0 || secondsLeft < 0) {
      clearInterval(timerInterval);
      secondsLeft == 0
      yourScore.textContent = "Time ran out! Your score was 0."
      console.log(secondsLeft)
      highScores()
    }
    if(counter == 5){
      clearInterval(timerInterval);
      yourScore.textContent = "Your score was " + secondsLeft + ".";
      highScores()
    }

  }, 1000);
}





function highScores(){
    scoreCard.style.display = "block";         
}

var scoreArray = [];

renderScores();

function renderScores() {
  scoreList.innerHTML = "";
  

  // Render a new li for each score
  for (var i = 0; i < scoreArray.length; i++) {
    var xscore = scoreArray[i];

    var li = document.createElement("li");
    li.textContent = xscore;
    scoreList.appendChild(li);
  }
}

// When form is submitted...
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    
  var name = inputName.value.trim();
  
  if (name === "") {
    return;
  }
  scoreArray.push(name + " " + secondsLeft);
  inputName.value = "";

  renderScores();
});

var resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", function(){
    scoreCard.style.display = "none";
    secondsLeft = 50
    counter = 0
    correctIncorrect.innerHTML = ""
    begin();
    
});

//clear high scores
clearButton.addEventListener("click", function(){
    scoreList.innerHTML = "";
    scoreArray = [];
    });



//main hooks
var startBtn = document.getElementById("startButton");
startBtn.style.display = "block";

var questionEl = document.getElementById("question");
questionEl.style.display = "none";

//score list hook 
var scoreList = document.getElementById("score-list")

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
var answers = [["Spain","France","Portugal","Argentina",],["Nigeria","Egypt","Saudi Arabia","Turkey"],["Asia","Africa","China","North America"],["Canadian","Spanish","French","German"],["Cape Cod","Magellan Pacific Ocean","Caspian Sea","Bering Strait"]]
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
    }else if(counter = 5){
        highScores()
    }
        
    
}
console.log(answers[counter][2])
console.log(correctAnswers[counter])

function selectAnswerA(){
    if(answers[counter][0] == correctAnswers[counter]){
        correctIncorrect.textContent = "Correct";
        counter++;
        askQuestion();

    }else{
        correctIncorrect.textContent = "Incorrect";
        counter++;
        wrongAnswer();
        askQuestion();
    }
}
function selectAnswerB(){
    if(answers[counter][1] == correctAnswers[counter]){
        correctIncorrect.textContent = "Correct";
        counter++;
        askQuestion();
    }
    else{
        correctIncorrect.textContent = "Incorrect";
        counter++;
        wrongAnswer();
        askQuestion();
    }
}
function selectAnswerC(){
    if(answers[counter][2] == correctAnswers[counter]){
        correctIncorrect.textContent = "Correct";
        counter++;
        askQuestion();
    }else{
        correctIncorrect.textContent = "Incorrect";
        counter++;
        wrongAnswer();
        askQuestion();
    }
}
function selectAnswerD(){
    if(answers[counter][3] == correctAnswers[counter]){
        correctIncorrect.textContent = "Correct";
        counter++;
        askQuestion();
    }else{
        correctIncorrect.textContent = "Incorrect";
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
var secondsLeft = 45;

function wrongAnswer(){
    secondsLeft = secondsLeft-5;
}

function startTimer() {
  
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft;

    
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      questionEl.textContent = "Time ran out! Your score was 0."
      highScores()
    }
    if(counter == 5){
      clearInterval(timerInterval);
      questionEl.textContent = "Your score was " + secondsLeft + ".";
      highScores()
    }

  }, 1000);
}

function highScores(){
    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";   

    
}

function scores(){
    
    var liTag = document.createElement("li");
    liTag.textContent = secondsLeft;
    scoreList.prependChild(liTag);
}






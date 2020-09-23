//main hooks
var startBtn = document.getElementById("startButton");
startBtn.style.display = "block";

var questionEl = document.getElementById("question");
questionEl.style.display = "none";

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
var questions = ["Question 1","Question 2","Question 3","Question 4","Question 5"]
var answers = [["AnswerA","AnswerB","AnswerC","AnswerD",],["AnswerX","AnswerY","AnswerZ","Answer?"],["AnswerH","AnswerR","AnswerL","AnswerK"],["AnswerT","AnswerG","AnswerN","AnswerX"],["AnswerS","AnswerG","AnswerJ","AnswerP"]]
var correctAnswers = ["AnswerA","AnswerX","AnswerR","AnswerX","AnswerG",]
//console.log(questions[3])
//     

startBtn.addEventListener("click", begin)



function begin(){
    startBtn.style.display = "none";
    questionEl.style.display = "block";
    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.style.display = "block";
    btn4.style.display = "block";
    
    askQuestion();
    
} 

var counter = 0

function askQuestion(){
    

    questionEl.textContent = questions[counter];
    answerA.textContent = answers[counter][0];
    answerB.textContent = answers[counter][1];
    answerC.textContent = answers[counter][2];
    answerD.textContent = answers[counter][3];
    counter++;



}
console.log(answers[counter][1])
console.log(correctAnswers[counter])

function selectAnswerA(){
    if(answers[counter][0] == correctAnswers[counter]){
        alert("correct");
        askQuestion();
    }else{
        alert("incorrect")
    }
}
function selectAnswerB(){
    if(answers[counter][1] == correctAnswers[counter]){
        alert("correct");
        askQuestion();
    }
    else{
        alert("incorrect")
    }
}
function selectAnswerC(){
    if(answers[counter][2] == correctAnswers[counter]){
        alert("correct");
        askQuestion();
    }else{
        alert("incorrect")
    }
}
function selectAnswerD(){
    if(answers[counter][3] == correctAnswers[counter]){
        alert("correct");
        askQuestion();
    }else{
        alert("incorrect")
    }
}


// CALL NEXT QUESTION
answerA.addEventListener("click", selectAnswerA)
answerB.addEventListener("click", selectAnswerB)
answerC.addEventListener("click", selectAnswerC)
answerD.addEventListener("click", selectAnswerD)






































// {
    //          question: "Question 1",
    //          answers: [
    //         { text1: "other answer", correct: false },
    //         { text2: "other answer", correct: false },
    //         { text3: "answer 3 correct", correct: true },
    //         { text4: "other answer", correct: false },
    //          ]
    //     },
    //     {
    //         question: "Question 2",
    //         answers: [
    //        { text1: "other answer", correct: false },
    //        { text2: "answer 2 correct", correct: true },
    //        { text3: "other answer", correct: false },
    //        { text4: "other answer", correct: false },
    //         ]
    //    },
    //     {
    //         question: "Question 3",
    //         answers: [
    //        { text1: "other answer", correct: false },
    //        { text2: "answer 2 correct", correct: true },
    //        { text3: "other answer", correct: false },
    //        { text4: "other answer", correct: false },
    //         ]
    //    },
    //     {
    //         question: "Question 4",
    //         answers: [
    //        { text1: "other answer", correct: false },
    //        { text2: "answer 2 correct", correct: true },
    //        { text3: "other answer", correct: false },
    //        { text4: "other answer", correct: false },
    //         ]
    //    },
    //     {
    //         question: "Question 5",
    //         answers: [
    //        { text1: "other answer", correct: false },
    //        { text2: "answer 2 correct", correct: true },
    //        { text3: "other answer", correct: false },
    //        { text4: "other answer", correct: false },
    //         ]
    //    },
    //     {
    //         question: "Question 6",
    //         answers: [
    //        { text1: "other answer", correct: false },
    //        { text2: "answer 2 correct", correct: true },
    //        { text3: "other answer", correct: false },
    //        { text4: "other answer", correct: false },
    //         ]
    //    },
    //     {
    //         question: "Question 7",
    //         answers: [
    //        { text1: "other answer", correct: false },
    //        { text2: "answer 2 correct", correct: true },
    //        { text3: "other answer", correct: false },
    //        { text4: "other answer", correct: false },
    //         ]
    //    },
    //     {
    //         question: "Question 8",
    //         answers: [
    //        { text1: "other answer", correct: false },
    //        { text2: "answer 2 correct", correct: true },
    //        { text3: "other answer", correct: false },
    //        { text4: "other answer", correct: false },
    //         ]
    //    },
    //     {
    //         question: "Question 9",
    //         answers: [
    //        { text1: "other answer", correct: false },
    //        { text2: "answer 2 correct", correct: true },
    //        { text2: "other answer", correct: false },
    //        { text4: "other answer", correct: false },
    //         ]
    //    },
    //     {
    //         question: "Question 10",
    //         answers: [
    //        { text1: "other answer", correct: false },
    //        { text2: "answer 2 correct", correct: true },
    //        { text3: "other answer", correct: false },
    //        { text4: "other answer", correct: false },
    //         ]
    //    },
    // ];
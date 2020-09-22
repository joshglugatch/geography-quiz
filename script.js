var startBtn = document.getElementById("startButton");
startBtn.style.display = "block";

var answerBtn = document.querySelector(".answerButton");

var questionEl = document.getElementById("question");
questionEl.style.display = "none";

var btn1 = document.getElementById("button1");
btn1.style.display = "none";
var btn2 = document.getElementById("button2");
btn2.style.display = "none";
var btn3 = document.getElementById("button3");
btn3.style.display = "none";
var btn4 = document.getElementById("button4");
btn4.style.display = "none";

var answerA = document.getElementById("A")
var answerB = document.getElementById("B")
var answerC = document.getElementById("C")
var answerD = document.getElementById("D")


//  QUESTIONS
var questions = [
    {
         question: "Question 1",
         answers: [
        { text1: "other answer", correct: false },
        { text2: "other answer", correct: false },
        { text3: "answer 3 correct", correct: true },
        { text4: "other answer", correct: false },
         ]
    },
    {
        question: "Question 2",
        answers: [
       { text1: "other answer", correct: false },
       { text2: "answer 2 correct", correct: true },
       { text3: "other answer", correct: false },
       { text4: "other answer", correct: false },
        ]
   },
    {
        question: "Question 3",
        answers: [
       { text1: "other answer", correct: false },
       { text2: "answer 2 correct", correct: true },
       { text3: "other answer", correct: false },
       { text4: "other answer", correct: false },
        ]
   },
    {
        question: "Question 4",
        answers: [
       { text1: "other answer", correct: false },
       { text2: "answer 2 correct", correct: true },
       { text3: "other answer", correct: false },
       { text4: "other answer", correct: false },
        ]
   },
    {
        question: "Question 5",
        answers: [
       { text1: "other answer", correct: false },
       { text2: "answer 2 correct", correct: true },
       { text3: "other answer", correct: false },
       { text4: "other answer", correct: false },
        ]
   },
    {
        question: "Question 6",
        answers: [
       { text1: "other answer", correct: false },
       { text2: "answer 2 correct", correct: true },
       { text3: "other answer", correct: false },
       { text4: "other answer", correct: false },
        ]
   },
    {
        question: "Question 7",
        answers: [
       { text1: "other answer", correct: false },
       { text2: "answer 2 correct", correct: true },
       { text3: "other answer", correct: false },
       { text4: "other answer", correct: false },
        ]
   },
    {
        question: "Question 8",
        answers: [
       { text1: "other answer", correct: false },
       { text2: "answer 2 correct", correct: true },
       { text3: "other answer", correct: false },
       { text4: "other answer", correct: false },
        ]
   },
    {
        question: "Question 9",
        answers: [
       { text1: "other answer", correct: false },
       { text2: "answer 2 correct", correct: true },
       { text2: "other answer", correct: false },
       { text4: "other answer", correct: false },
        ]
   },
    {
        question: "Question 10",
        answers: [
       { text1: "other answer", correct: false },
       { text2: "answer 2 correct", correct: true },
       { text3: "other answer", correct: false },
       { text4: "other answer", correct: false },
        ]
   },
];

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

var i = 0

function askQuestion(){

    questionEl.textContent = questions[i].question;
    answerA.textContent = questions[i].answers.text1;
}
// CALL NEXT QUESTION
//answerBtn.addEventListener("click", askQuestion)


function selectAnswer(){

}
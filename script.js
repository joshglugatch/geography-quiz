var startBtn = document.getElementById("startButton");
startBtn.style.display = "block";
var question = document.getElementById("question");
question.style.display = "none";
var btn1 = document.getElementById("button1");
btn1.style.display = "none";
var btn2 = document.getElementById("button2");
btn2.style.display = "none";
var btn3 = document.getElementById("button3");
btn3.style.display = "none";
var btn4 = document.getElementById("button4");
btn4.style.display = "none";

startBtn.addEventListener("click", begin)

function begin(){
    startBtn.style.display = "none";
    question.style.display = "block";
    btn1.style.display = "block";
    btn2.style.display = "block";
    btn3.style.display = "block";
    btn4.style.display = "block";
}


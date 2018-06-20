let score = 0; 
let scoreBox = document.getElementById("score"); 
let questionBox = document.getElementById("question"); 
let answerForm = document.getElementById("quizForm"); 

function setAddGame() {
    answerForm.setAttribute("data-gametype", "add"); 
    addQuiz(); 
}

function setSubGame() {
    answerForm.setAttribute("data-gametype", "sub"); 
    subQuiz(); 
}

function setMulGame() {
    answerForm.setAttribute("data-gametype", "mul"); 
    mulQuiz(); 
}

function checkAnswer() {
    if (answerForm["answer"].value == answerForm["rightAnswer"].value) {
        alert("nice"); 
        score++; 
    } else {
        alert("better luck next time")
    }
    
    answerForm["answer"].value = ""; 
    scoreBox.textContent = score; 
    
    let gametype = answerForm.getAttribute("data-gametype"); 
    if (gametype == "add") {
        addQuiz(); 
    } else if (gametype == "sub") {
        subQuiz(); 
    } else {
        mulQuiz(); 
    }
    return false; 
}

function addQuiz() {
    let num1 = Math.floor(Math.random()*50); 
    let num2 = Math.floor(Math.random()*50); 
    
    questionBox.textContent = `What is: ${num1} + ${num2} ?`
    answerForm['rightAnswer'].value = (num1 + num2); 
}

addQuiz(); 
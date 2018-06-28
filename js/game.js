let score = 0;
let scoreBox = document.getElementById("score");
let questionBox = document.getElementById("question");
let answerForm = document.getElementById("quizForm");
let messageToPlayer = document.getElementById("scoreMessage");
let bgScore = document.getElementById("background-score");
let timerBox = document.getElementById("timerBox");
let seconds = 60;
let timerId;
let pointsAddedToScore = 10;
let userName;
let gametype; 

let highscores = [];


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

function rightAnswerGreen() {
    bgScore.style.backgroundColor = "#74d24e";
    setTimeout(bgToNormalOrange, 800);
}

function wrongAnswerRed() {
    bgScore.style.backgroundColor = "#FF0000";
    setTimeout(bgToNormalOrange, 800);
}

function bgToNormalOrange() {
    bgScore.style.backgroundColor = "orange";
}

function checkAnswer() {
    if (score < 50) {
        pointsAddedToScore = 10;
    }
    else if (score >= 50 && score < 150) {
        pointsAddedToScore = 20;
    }
    else if (score >= 150 && score < 400) {
        pointsAddedToScore = 50;
    }
    else if (score >= 400 && score < 1000) {
        pointsAddedToScore = 100;
    }
    else if (score >= 1000) {
        pointsAddedToScore = 500;
    }

    if (answerForm["answer"].value == answerForm["rightAnswer"].value) {
        messageToPlayer.innerHTML = "Nice!";
        score += pointsAddedToScore;
        rightAnswerGreen()
    }
    else {
        messageToPlayer.innerHTML = "Wrong!";
        wrongAnswerRed()
    }

    answerForm["answer"].value = "";
    scoreBox.textContent = score;

    let gametype = answerForm.getAttribute("data-gametype");
    if (gametype == "add") {
        addQuiz();
    }
    else if (gametype == "sub") {
        subQuiz();
    }
    else {
        mulQuiz();
    }
    return false;
}



function addQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);

    questionBox.textContent = `What is: ${num1} + ${num2} ?`
    answerForm['rightAnswer'].value = (num1 + num2);
}

function subQuiz() {
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);

    if (num1 - num2 < 0) {
        subQuiz();
    }
    else {
        questionBox.textContent = `What is: ${num1} - ${num2} ?`
        answerForm['rightAnswer'].value = (num1 - num2);
    }
}

function mulQuiz() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);

    questionBox.textContent = `What is: ${num1} * ${num2} ?`
    answerForm['rightAnswer'].value = (num1 * num2);
}


function randomQuiz() {
    let randomNumber = Math.floor(Math.random()*3) + 1; 
    
    if (randomNumber === 1) {
        gametype = "add"; 
    } else if (randomNumber === 2) {
        gametype = "sub"; 
    } else {
        gametype = "mul"; 
    }
}

addQuiz();

function gameTimer() {
    timerBox.innerHTML = seconds;

    if (seconds !== 0) {
        seconds--;

    }
    else {
        clearInterval(timerId);
        console.log('test');

        messageToPlayer.innerHTML = 'STOP!';

        console.log("does it run?");
        highscoreAndResetGame();
        
    }
}





function startGame() {
    score = 0; 
    scoreBox.textContent = score;
    $("#timerBox").fadeIn(1000); 
    userName = prompt("Please enter your playername"); 
    timerId = setInterval(function() { gameTimer() }, 1000);
}




function highscoreAndResetGame() {
    let scorePushed = false;
    if (highscores.length === 0) {
        highscores.unshift({ 'name': userName, 'score': score });
        scorePushed = true;
    }
    else {

        for (i in highscores) {
            if (score > highscores[i].score) {
                highscores.splice(i, 0, { 'name': userName, 'score': score });
                scorePushed = true;
                break;
            }
        }

        if (!scorePushed) {
            highscores.push({ 'name': userName, 'score': score });
        }

    }
    console.log(highscores);
    
    for (let i = 0; i < 6; i++) {
        $(".footerScore").remove(); 
    }
    
    for (i in highscores) {
        $("#scoreBoard").append("<div class='col-xs-12 col-sm-2 text-center footerScore'><div class='highscore col-xs-6 col-sm-12 text-center'>" + highscores[i].score + "</div><div class='user-name col-xs-6 col-sm-12 text-center'>" + highscores[i].name + "</div></div>");
    }

    
    score = 0;
    seconds = 60;
    scoreBox.innerHTML = score;
    $("#timerBox").fadeOut(1000); 
}


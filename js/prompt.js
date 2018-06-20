function greetingButton() {

    let inputBox = document.getElementById('nameInput');
    let myName = inputBox.value;

    let greetingText = "Hello, there, " + myName;
    let greetingParagraph = document.getElementById("greeting");

    greetingParagraph.classList.add("greetingPar");
    greetingParagraph.textContent = greetingText;

    // greetingParagraph.style.color = "purple"; 
   
}

function ageButton() {
    let age = Number(document.getElementById("ageInput").value);
    let greetingParagraph = document.getElementById("greeting");
    let tooYoung = "<h4 >sorry, too young to enter this website</h4>";
    let accessGranted = "Welcome on our awesome website for super adult people who are very wise and stuff.";

    if (age < 18) {
        greetingParagraph.innerHTML = tooYoung;
    }
    else {
        greetingParagraph.textContent = accessGranted;
    }
}

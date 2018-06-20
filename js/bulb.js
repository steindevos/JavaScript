function lightOn() {
    let bulbImage = document.getElementById('lightBulb'); 
    let switchText = document.getElementById("lightSwitch"); 
    let newSource = bulbImage.src.slice(-15); 
    
    if (newSource === "img/bulboff.gif") {
        bulbImage.src = 'img/bulbon.gif';
        switchText.textContent = "On"; 
    } else {
        bulbImage.src = 'img/bulboff.gif'; 
        switchText.textContent = "Off"; 
    }
}
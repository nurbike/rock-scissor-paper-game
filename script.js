function setImage(selected, targetDivId) {
    var targetDiv = document.getElementById(targetDivId);
    targetDiv.innerHTML = "";
    
    var image = document.createElement("IMG");
    image.setAttribute("id", "selectedImage");
    if (selected === "rock") {
        image.src = "./images/rock.png";
    } else if (selected === "scissors") {
        image.src = "./images/scissors.png";
    } else if (selected === "paper") {
        image.src = "./images/paper.png";
    }

    targetDiv.appendChild(image);
}

function btn(choosenButton) {
    setImage(choosenButton, "you");
    var computer = computerSelect();
    game(choosenButton, computer);
}

function computerSelect() {
    var computerSelects = Math.floor(Math.random() * 3);
    if (computerSelects === 0) {
        computerSelects = "rock";
    } else if (computerSelects === 1) {
        computerSelects = "scissors";
    } else if ( computerSelects === 2) {
        computerSelects = "paper";
    }
    setImage(computerSelects, "computer");
    return computerSelects;
}

function game(you, computer) {
    if (you === computer) {
        console.log("Berabere");
        return;
    } 
    if (you === "rock") {
        if (computer === "scissors") {
            console.log("Kazandın");
            return;
        } else {
            console.log("Kaybettin");
            return;
        }
    } 

    if (you === "scissors") {
        if (computer === "paper") {
            console.log("Kazandın");
            return;
        } else {
            console.log("Kaybettin");
            return;
        }
    } 

    if (you === "paper") {
        if (computer === "rock") {
            console.log("Kazandın");
            return "Kazandın";
        } else {
            console.log("Kaybettin");
            return;
        }
    } 

}


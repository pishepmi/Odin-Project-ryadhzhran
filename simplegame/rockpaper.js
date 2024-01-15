// Function to write text before game starts
let i = 0;
let txt = 'Thumb, Index, Pinky?';
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("gameh1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}


// Function to play main button audio on click
function playSound() {
    const buttonPress = document.querySelector("#startgamesound");
    buttonPress.play();
}
mainButton = document.querySelector("#startgame").addEventListener("click", playSound);

// Function to hide start div and show end div
let startContainer = document.getElementById('startcontainer');
let btn = document.querySelector("#startgame");

btn.addEventListener('click', function(){
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
    // Add timeout with length matching animation-duration 
    window.setTimeout(function(){
        startContainer.style.display = 'none';
    },700); 
    setTimeout(() => {  typeWriter(); }, 1000);
    // Add event listener to all of the game buttons
    gameButtons = document.querySelectorAll(".gameselection").forEach(item => {
        item.addEventListener("click", playSound);
    })
});


// Function to hide end div and show winner div & logos
function hideEndContainerShowWinner() {
    let gameContainer = document.querySelector('.gamecontainer');
    let bottomContainer = document.getElementById('bottomcontainer');
    gameContainer.style.opacity = 0;
    gameContainer.style.transform = 'scale(0)';
    // Add timeout with length matching animation-duration 
    gameContainer.style.display = 'none';
    bottomContainer.style.display = 'block';
}

btn.addEventListener('click', function(){
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
    // Add timeout with length matching animation-duration 
    window.setTimeout(function(){
        startContainer.style.display = 'none';
    },700); 
    setTimeout(() => {  typeWriter(); }, 1000);
    // Add event listener to all of the game buttons
    gameButtons = document.querySelectorAll(".gameselection").forEach(item => {
        item.addEventListener("click", playSound);
    })
});


// Global variables
// Initialise player score to zero
let playerScore = 0;
// Initialise computer score to zero
let computerScore = 0;
// Initialise games played to zero
let gamesPlayed = 0;


// Event listener for click
document.addEventListener("click", gameSelectionListener);
// See if the click was on a game selection button (can't apply directly on button as div initially hidden)
function gameSelectionListener(event) {
    let element = event.target;
    console.log(event.target);
    let pinky = "pinky";
    let index = "index";
    let thumb = "thumb";
    if (element.classList.contains("gameselection") && element.id === ("pinkydiv")) {
        playRound(pinky);
        console.log("submitted pinky")
    }
    else if (element.classList.contains("selection") && element.id === ("pinkyimg")) {
        playRound(pinky);
        console.log("submitted pinky")
    }
    else if (element.classList.contains("gameselectiontext") && element.id === ("pinkyselection")) {
        playRound(pinky);
        console.log("submitted pinky")
    }
    else if (element.classList.contains("gameselection") && element.id === ("indexdiv")) {
        playRound(index);
        console.log("submitted index")
    }
    else if (element.classList.contains("selection") && element.id === ("indeximg")) {
        playRound(index);
        console.log("submitted index")
    }
    else if (element.classList.contains("gameselectiontext") && element.id === ("indexselection")) {
        playRound(index);
        console.log("submitted index")
    }
    else if (element.classList.contains("gameselection") && element.id === ("thumbdiv")) {
        playRound(thumb);
        console.log("submitted thumb")
    }
    else if (element.classList.contains("selection") && element.id === ("thumbimg")) {
        playRound(thumb);
        console.log("submitted thumb")
    }
    else if (element.classList.contains("gameselectiontext") && element.id === ("thumbselection")) {
        playRound(thumb);
        console.log("submitted thumb")
    }
}


// Function to randomly generate computer game entries
function computerPlay() {
    randomGameValue = Math.floor(Math.random() * 3);
    if (randomGameValue == "0") {
        return "pinky";
    }
    else if (randomGameValue == "1") {
        return "index";
    }
    else {
        return "thumb";
    }
}

// Main game function
function playRound(playerSelection) {
    console.log(playerSelection);
    // Generate computer selection
    const computerSelection = computerPlay();
    // Set variable for the player's pinky div
    const pinkySelected = document.querySelector("#pinkydiv");
    // Set variable for the player's index div
    const indexSelected = document.querySelector("#indexdiv");
    // Set variable for the player's thumb div
    const thumbelected = document.querySelector("#thumbdiv");
    // Set variable for the computer's pinky div
    const computerpinkySelected = document.querySelector("#computerpinkydiv");
    // Set variable for the computer's index div
    const computerindexSelected = document.querySelector("#computerindexdiv");
    // Set variable for the computer's thumb div
    const computerthumbelected = document.querySelector("#computerthumbdiv");
    // Loop through computer options
    if (computerSelection == "pinky") {
        // Change the background color of the pinky div
        computerpinkySelected.style.backgroundColor = "#7987e9";
        // Change the background color of the other divs
        computerindexSelected.style.backgroundColor = "white";
        computerthumbelected.style.backgroundColor = "white";
    }
    else if (computerSelection == "index") {
        // Change the background color of the index div
        computerindexSelected.style.backgroundColor = "#7987e9";
        // Change the background color of the other divs
        computerpinkySelected.style.backgroundColor = "white";
        computerthumbelected.style.backgroundColor = "white";
    }
    else if (computerSelection == "thumb") {
        // Change the background color of the pinky div
        computerthumbelected.style.backgroundColor = "#7987e9";
        // Change the background color of the other divs
        computerpinkySelected.style.backgroundColor = "white";
        computerindexSelected.style.backgroundColor = "white";
    }
    // Convert player entry to string
    let playerSelectionString = String(playerSelection);
    // Convert player selection to all lowercase
    let playerSelectionLowercase = playerSelectionString.toLowerCase();
    // If player selection is pinky
    if (playerSelectionLowercase === "pinky") {
        // Change the background color of the pinky div
        pinkySelected.style.backgroundColor = "#fc5868";
        // Change the background color of the other divs
        indexSelected.style.backgroundColor = "white";
        thumbelected.style.backgroundColor = "white";
        // If computer selection is pinky then draw
        if (computerSelection === "pinky") {
            console.log("Draw!");
            playerScore++;
            computerScore++;
            // Set the score in the player HTML element
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            // Set the score in the computer HTML element
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "draw";
        }
        // If computer selection is index then lose as index beats pinky
        else if (computerSelection === "index") {
            console.log("You lose - index beats pinky!");
            computerScore++;
            // Set the score in the computer HTML element
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "lose";
        }
        // If computer selection is thumb then win as thumb beats index
        else {
            console.log ("You win - thumb beats index!");
            playerScore++;
            // Set the score in the player HTML element
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            game(playerScore, computerScore);
            return "win";
        }
    }
    // Else if player selection is index
    else if (playerSelectionLowercase === "index") {
        // Change the background color of the index div
        indexSelected.style.backgroundColor = "#fc5868";
        // Change the background color of the other divs
        pinkySelected.style.backgroundColor = "white";
        thumbelected.style.backgroundColor = "white";
        // If computer selection is pinky then win as index beats pinky
        if (computerSelection === "pinky") {
            console.log("You win - index beats pinky!");
            playerScore++;
            // Set the score in the player HTML element
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            game(playerScore, computerScore);
            return "win";
        }
        // If computer selection is index then draw
        else if (computerSelection === "index") {
            console.log("Draw!");
            playerScore++;
            computerScore++;
            // Set the score in the player HTML element
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            // Set the score in the computer HTML element
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "draw";
        }
        // If computer selection is thumb then lose as thumb beats index
        else {
            console.log("You lose - thumb beats index!")
            computerScore++;
            // Set the score in the computer HTML element
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "lose";
        }
    }
    // Else (player selected thumb)
    else if (playerSelectionLowercase === "thumb") {
        // Change the background color of the thumb div
        thumbelected.style.backgroundColor = "#fc5868";
        // Change the background color of the other divs
        pinkySelected.style.backgroundColor = "white";
        indexSelected.style.backgroundColor = "white";
        // If computer selection is pinky then lose as pinky beats thumb
        if (computerSelection === "pinky") {
            console.log("You lose - pinky beats thumb!")
            computerScore++;
            // Set the score in the computer HTML element
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "lose";
        }
        // If computer selection is index then win as thumb beats index
        else if (computerSelection === "index") {
            console.log("You win - thumb beats index!");
            playerScore++;
            // Set the score in the player HTML element
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            game(playerScore, computerScore);
            return "win";
        }
        // If computer selection is thumb then draw
        else {
            console.log("Draw!");
            playerScore++;
            computerScore++;
            // Set the score in the player HTML element
            const currentPlayerScore = document.querySelector("#playerscore").innerHTML = `Score: ${playerScore}`;
            // Set the score in the computer HTML element
            const currentComputerScore = document.querySelector("#computerscore").innerHTML = `Score: ${computerScore}`;
            game(playerScore, computerScore);
            return "draw";
        }
    }
    else {
        console.log("Invalid entry, please try again.");
        game(playerScore, computerScore);
        return null;
    }
}


// Score tracker
function game(playerScore, computerScore) {
    // Set variable for the game update paragraph tag
    const gameUpdates = document.querySelector(".gameupdates");
    // Set variables for the user and robot win logos
    let userWinLogo = document.getElementById('userwinslogo');
    let robotWinLogo = document.getElementById('robotwinslogo');
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            let text = document.createTextNode(`YOU WIN ${playerScore}:${computerScore}!`);
            gameUpdates.appendChild(text);
            hideEndContainerShowWinner();
            playWinSound();
            userWinLogo.style.display = 'block';
        }
        else if (computerScore > playerScore) {
            let text = document.createTextNode(`COMPUTER WINS ${computerScore}:${playerScore}!`);
            gameUpdates.appendChild(text);
            hideEndContainerShowWinner();
            playLoseSound();
            robotWinLogo.style.display = 'block';
        }
        else {
            let text = document.createTextNode(`IT WAS A DRAW!`);
            gameUpdates.appendChild(text);
            hideEndContainerShowWinner();
            userWinLogo.style.display = 'block';
            robotWinLogo.style.display = 'block';
        }   
    }
}
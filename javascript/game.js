//variables
const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
guesses = new Array;
var lives = 9;
var wins = 0;
var loses = 0;
function resetGame(){
    lives = 9;
    guesses = [];
    randomLetter = (Math.floor(Math.random() * alphabet.length));
    answer = alphabet[randomLetter];
}
//randomize the answer
var randomLetter = (Math.floor(Math.random() * alphabet.length));
var answer = alphabet[randomLetter];
//on key press function begins here.
document.onkeyup = function(event) {
    let userGuess = event.key;
    //if same letter is chosen
    for (let i = 0; i < guesses.length; i++) {
        if (guesses[i] === userGuess) {
            return; //kills the function.
        }}
    //checks if input is part of alphabet, will only run if input is valid.
for (let i = 0; i < alphabet.length; i++) {   
    if (alphabet[i] === userGuess) {
    //if correct answer is chosen.
        if(userGuess === answer){
            wins++;
            resetGame();  
    //if incorrect answer is chosen.
        } else {
            lives--;
            guesses.push(userGuess);
            console.log(guesses);
        }
    //pushes used letters into an array to print later. After 9x adds a loss.     
        if (guesses.length === 9){
            loses++;
            resetGame();
        }
//prints answer on screen.
document.getElementById("yourLoses").innerHTML = "Loses: " + loses;
document.getElementById("yourWins").innerHTML = "Wins: " + wins;
document.getElementById("yourLives").innerHTML = "Guesses left: " + lives;
document.getElementById("yourGuesses").innerHTML = "Your guesses so far: " + guesses.join(' ');
console.log(answer);
}}}
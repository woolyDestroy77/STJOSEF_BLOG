function creatGame(min, max) {
    return Math.random() * (max - min) + min;
}

const randomNumber = Math.trunc(creatGame(1, 10));

function guessNumber(guess) {
    if (guess === randomNumber) {
        console.log('Player has won');
    } else {
        if (guess > randomNumber) {
            console.log('Too High');
        } else {
            console.log('Too Low');
        }
        let Guess = parseInt(prompt('Enter A Number!'));
        guessNumber(Guess);
    }
}

console.log(randomNumber);

let Guess = parseInt(prompt('Enter A Guess'));
guessNumber(Guess);
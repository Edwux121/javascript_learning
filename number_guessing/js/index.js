const MIN_NUM = 1;
const MAX_NUM = 100;
const answer = Math.floor(Math.random() * (MAX_NUM - MIN_NUM + 1)) + MIN_NUM;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${MIN_NUM} and ${MAX_NUM}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert('Please enter a valid number!');
        continue;
    }
    else if (guess < MIN_NUM || guess > MAX_NUM) {
        window.alert('Please enter a number within the range!');
        continue;
    }
    else {
        attempts++;

        if (guess === answer) {
            window.alert(`Congratulations! You've guessed the correct number in ${attempts} attempts!`);
            running = false;
        }
        else if (guess < answer) {
            window.alert('Try guessing a higher number!');
        }
        else {
            window.alert('Try guessing a lower number!');
        }
    }
}

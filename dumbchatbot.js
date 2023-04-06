import readline from "readline-sync";

const help = `-----------------------------
Here´s a list of commands that I can execute! 

help: Opens this dialog.
hello: I will say hello to you
botInfo: I will introduce myself
botName: I will tell my name
botRename: You can rename me
forecast: I will forecast tomorrows weather 100% accurately
quit: Quits the program.
-----------------------------`;

let counter = 0;
let name = "Chappy";
let terminate = false;

function hello () {
    counter++;
    console.log("What is your name?");
    const answer = readline.question();
    console.log("Hello there, " + answer + "!");
}

function botInfo () {
    counter++;
    console.log(`I am a dumb bot. You can ask me almost anything :). You have already asked me ${counter} questions.`);
}

function botName () {
    counter++;
    console.log(`My name is currently ${name}. If you want to change it, type botRename.`);
}

function botRename () {
    counter++;
    console.log("Type my new name, please.");
    const answer = readline.question();
    console.log(`Are you happy with the name ${answer}?`);
    const answer2 = readline.question();

    if (answer2 === "yes") {
        name = answer;
        console.log(`I was renamed to ${answer}`);
    } else {
        console.log(`Name not changed. My name is ${name}.`);
    }
}

function forecast() {
    counter++;

    const tempature = Math.floor(Math.random() * 40) + 1;
    const cloudy = !!Math.round(Math.random());
    const sunny = !!Math.round(Math.random());
    const wind = !!Math.round(Math.random());

    console.log("Tomorrows weather will be....");
    console.log("Temperature: " + tempature + " celsius degree");
    console.log("Cloudy: " + cloudy);
    console.log("Sunny: " + sunny);
    console.log("Wind: " + wind);
}

console.log("Hi! I am a dumb chat bot. You can check all the things I can do by typing 'help'.");

while (terminate === false) {
    const answer = readline.question();

    if (answer === "hello") {
        hello();
    } else if (answer === "botInfo") {
        botInfo();
    } else if (answer === "botName") {
        botName();
    } else if (answer === "botRename") {
        botRename();
    } else if (answer === "forecast") {
        forecast();
    } else if (answer === "help") {
        console.log(help);
    } else if (answer === "quit") {
        terminate = true;
    } else {
        console.log("Command is not recognised, try again.");
    }
}

console.log(name + " has quit with " + counter + " questions asked.");
# trainee-academy-assignments
Showcase of chosen assignments and their solutions

## Assignment 8 (Weather events)

Your friend wants to create a service for tracking changes in the weather. They want to gather information on multiple values: temperature, humidity, and wind strength.

Every time one of these is changed, a weather change event object should be added to an array that lists the changes in the weather.

Each event should have a `timestamp` and a value that corresponds to the type of the event. For example, a temperature change event should have a `timestamp` and a `temperature` property. We also need a method for printing information about the event.

Thinking of this, we can see that the events form a class structure:

- Base weather event
    - Temperature change event
    - Humidity change event
    - Wind strength change event

Let's implement that!

### a)

Create a class named `WeatherEvent` that has a `timestamp` value taken as a parameter and assigned as a property in the constructor.

Also create two methods:

- a `getInformation` method that just returns an empty string. We'll override this in derived classes to make the events print meaningful information
- a `print` method that uses `console.log` to log the event's `timestamp` followed by a space and the value returned by `getInformation`

### b)

Create a class named `TemperatureChangeEvent` that extends `WeatherEvent`. Its constructor should accept and forward the `timestamp` parameter to the superclass constructor and also have a `temperature` parameter that is assigned as a property.

Also, override the `getInformation` method to return "temperature: _your temperature value_ °C".

### c)

Create a class named `HumidityChangeEvent` that extends `WeatherEvent`. Its constructor should accept and forward the `timestamp` parameter to the superclass constructor and also have a `humidity` parameter that is assigned as a property.

Also, override the `getInformation` method to return "humidity: _your humidity value_ %".

### d)

As you can probably guess, we also need to implement the wind strength change event similarly to the above two ones. Do so.

### e)

Create an empty array.

Create some weather events of different types and push them to the array. When supplying a value to the `timestamp` property, you can just type any string that denotes a date+time stamp to you.

Use a loop or the `forEach` array method to go through all of the events and call their `print` method to make sure your code works.

```js
const weatherEvents = [];

weatherEvents.push(new TemperatureChangeEvent("2022-11-29 03:00", -6.4));
weatherEvents.push(new HumidityChangeEvent("2022-11-29 04:00", 95));
weatherEvents.push(new WindStrengthChangeEvent("2022-11-30 13:00", 2.2));

weatherEvents.forEach(weatherEvent => weatherEvent.print());
// Should print:
// 2022-11-29 03:00 temperature: -6.4°C
// 2022-11-29 04:00 humidity: 95%
// 2022-11-30 13:00 wind strength: 2.2 m/s
```

**EXTRA:** Instead of a string, use a `Date` object to specify the timestamp for the events. Also, print the Date object properly in the weather event `print` method. See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date


# Example 2 - Dumb chatbot

Create a chatbot command line program.

You'll be needing some command line input from the user with the following exercise, and for that you'll need the readline-sync package

    npm init
    npm install --save readline-sync

Then, try using it:

    import readline from "readline-sync";
    const answer = readline.question("Give me an answer: ");
    console.log(answer);


## The command line application
This is a really common exercise that almost every programmer does at some point in their career. The reason it’s so common, is because through this you have to use a lot of different types of variables and various operations.

The base for all applications are their UI and this is the case in this application as well. Below you’ll see what your application should say when you run it the first time.

>Hi! I am a dumb chat bot
>You can check all the things I can do by typing 'help'.

Now the after logging out the text above, you will have to wait for the user input. There’s a lot of different options for the user at this point, but let’s define the behavior for the help command first.


## The 'help' command
If the user writes ``help`` in to the command line, the text below should be logged out. You don’t have to worry about the commands listed in the text yet, but this is what your program should do when the user gives you this input. 

```
-----------------------------
Here´s a list of commands that I can execute! 

help: Opens this dialog.
hello: I will say hello to you
botInfo: I will introduce myself
botName: I will tell my name
botRename: You can rename me
forecast: I will forecast tomorrows weather 100% accurately
quit: Quits the program.
-----------------------------
```

## Sample output of using all commands

### hello command

If the user writes ``hello`` in to the command line, you should open a dialog that asks the **users name** and after that **say hello to user with given name**. Whenever the user answers these questions you should store the answers in to their respective variables. The literal implementation is up to you. Below is a sample dialog described for you. (The bolded text is user input).


>**hello**  
>What is your name?  
>**Dan Ackers**  
>Hello there, Dan Ackers!  


### botInfo command

If the user writes ``botInfo`` in to the command line, you should ``console.log`` info or introduction about the bot itself. Also command ``botInfo`` will **output a counter value of asked questions (commands runned).**

That means like so:  
``hello`` -> ``counter = 1``  
``botInfo`` -> ``counter = 2``  
``botInfo`` -> ``counter = 3``   
etc.  

The implementation is up to you. Below is the dialog described for you. (The bolded text is user input).

>**botInfo**  
>I am a dumb bot. You can ask me almost anything :). You have already asked me *n* questions.  

### botName command
If the user writes ``botName`` in to the command line, you should ``console.log`` **bot's current name**. Bot's default name should be defined (choose your own default name)

The implementation is up to you. Below is the dialog described for you. (The bolded text is user input)

>**botName**  
>My name is currently *current name*. If you want to change it, type botRename.


### botRename command
If the user writes ``botRename`` in to the command line, you should open a dialog that asks the user multiple questions. The implementation is up to you. Below is the dialog described for you. (The bolded text is user input)

>**botRename**  
>Type my new name, please.  
**Arnold**  
>Are you happy with the name Arnold?  
**Yes**  
>I was renamed to Arnold  

or

>**botRename**   
>Type my new name, please.  
**Arnold**  
>Are you happy with the name Arnold?  
**No**  
>Name not changed. My name is ${previousName}.  

``botRename`` will overwrite default/previous name, so if you run ``botName`` after renaming it, you should get renamed name logged out.

### forecast command
If the user writes ``forecast`` in to the command line, you should forecast tomorrows weather randomly from multiple choises.  
The implementation is up to you. Below is an example of desired output.


>**forecast**  
>Tomorrows weather will be....  
>Temperature: 20 celsius degree  
>Cloudy: yes  
>Sunny: no  
>Wind: yes  



### quit command
If the user writes ``quit`` in to the command line, program should quit.

### (End of the assignment - Start of the solution)

## Solution

### Prerequisites
This ChatBot should work on most terminals with "readline-sync"-package (npm install readline-sync).
Tested with PowerShell on Windows 10.

### Initial thoughts
We need to make ChatBot which prints something to console when certain command has been given to ChatBot.
So we need 7 functions and some kind of loop at least. Also we need a few variables and way assign random values into variables.

### 1. import and variables
First I imported "readline" from "readline-sync" and initialized global variables I need.

```js
import readline from "readline-sync";

const help = `-----------------------------
{List of commands}
-----------------------------`;

let counter = 0;
let name = "Chappy";
let terminate = false;
```

## 2. Make all commands into functions.
After that, I made each command into function. All functions atleast print something to console and also some functions 
ask for more user input (all functions are inside the "dumbchatbot.js").

Example function:

```js
function botName () {
    counter++;
    console.log(`My name is currently ${name}. If you want to change it, type botRename.`);
}
```

## 3. Make "random generator" for the forecast function.
I used Math.random() to assign random values for forecast variables.

```js
function forecast() {
    counter++;

    const tempature = Math.floor(Math.random() * 40) + 1;
    const cloudy = !!Math.round(Math.random());
    const sunny = !!Math.round(Math.random());
    const wind = !!Math.round(Math.random());

    console.log("Tomorrows weather will be....");
    ...
    console.log("Wind: " + wind);
}
```

## 4. Make command loop for the chatbot.
Then I made while loop, which is executed until user quits program.

```js
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
```
/**
 * Title      : Node Js Simple Quotes App
 * Description: This is a simple Node Js Application that print random quotes per interval.
 * Author     : Developer Shakib Ahmed
 * Date       : January 25, 2022
 */

// Dependencies
const math = require('./lib/math');
const quotes = require('./lib/qoutes');

// App object - Module scaffolding
const app = {};

// App configuration
app.config = {
    timeBetweenQuotes: 1000,
}

// Function that prints a random quote
app.showQuote = function() {
    // Get all the quotes
    const allQuotes = quotes.getAllQuotes();

    // Get the length of the quotes
    const numberOfQuotes = allQuotes.length;

    // Pick a random number between 1 and the total number of quotes
    const randomNumber = math.getRandomNumber(1, numberOfQuotes);

    // Get the quote at that position in the array -1 (minus one)
    const selectedQuote = allQuotes[randomNumber -1];

    // Print the quote to the console
    console.log(selectedQuote);
}

// Function that loops indefinitely, calling the showQuote function as it goes
app.indefiniteLoop = function() {
    // Create the interval, using the config variable define above
    setInterval( app.showQuote, app.config.timeBetweenQuotes );
}

// Invoke the loop
app.indefiniteLoop();
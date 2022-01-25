/**
 * Title      : Quotes Library
 * Description: Utility library for getting a list of Quotes
 * Author     : Developer Shakib Ahmed
 * Date       : January 25, 2022
 * Quotes URL : https: //blog.hubspot.com/sales/famous-quotes
 */


// Dependencies
const fs = require('fs');

// Quotes object - Module scaffolding
const quotes = {};

// Get all the quotes and return them to the user
quotes.getAllQuotes = function() {
    // Read the text file containing the quotes
    const fileContent = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');

    // Turn the string into an array
    const arrayOfQuotes = fileContent.split(/\r?\n/);

    // Return the array
    return arrayOfQuotes;
}

// Export the library
module.exports = quotes;
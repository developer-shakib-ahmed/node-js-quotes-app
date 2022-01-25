/**
 * Title      : Math Library
 * Description: Utility library for math related functions
 * Author     : Developer Shakib Ahmed
 * Date       : January 25, 2022
 */

// Math object - Module scaffolding
const math = {}

// Get a random integer between to integers
math.getRandomNumber = function(min, max) {
    let minimum = min;
    let maximum = max;

    minimum = typeof minimum === 'number' ? minimum : 0;
    maximum = typeof maximum === 'number' ? maximum : 0;

    // Return the random integer
    return Math.floor( Math.random() * ( maximum - minimum + 1 ) + minimum );
}

// Export the library
module.exports = math
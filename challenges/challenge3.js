/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the `greetAndUppercase` function. This function uses
 *    Async/Await. How is this function different than a regular (non-async)
 *    function? What is its return type?
 * 
 *    Because it uses the async and await keywords to handle asynchronous operations. 
 *    These keywords allow the function to pause and wait for the result of a promise 
 *    before continuing, making the code easier to read and write. The return type is 
 *    a Promise that resolves to the uppercased greeting.
 * 
 * 
 * 2. Uncomment block #1 and run the code using `node challenge3.js`. What is
 *    printed when we use `greetAndUppercase` like a regular function?
 * 
 *    Promise { <pending> }
 * 
 *    It returns a Promise object which is logged to the console. Because the Promise 
 *    is not resolved, it won't log the uppercase greeting to the console.
 * 
 * 
 * 3. Uncomment block #2 and run the code again. What happens now?
 * 
 *    Promise { <pending> }
 *    HELLO THERE, DUCKY
 * 
 *    The Promise is resolved and the result (uppercased greeting) is logged to the console.
 * 
 * 
 * 4. Write an asynchronous method 'spacer' that takes a string as input and 
 *    returns the input string with a space added between each character. You 
 *    can use your solution from Part 3.
 * 
 *    Call 'spacer' in the `greetAndUppercase` method and run your code again.
 *    You should see something like:
 * 
 *    'H E L L O   T H E R E ,   D U C K Y'
 * 
 * 
 *******************************************************************************
 */


 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
 function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') { 
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 500);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 500);
    });
}

function spacer(str) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (typeof str === 'string') {
              let spacedStr = '';
              for (let i = 0; i < str.length; i++) {
                  spacedStr += str[i] + ' ';
              }
              resolve(spacedStr.trim());
          } else {
              reject('Argument to spacer must be a string');
          }
      }, 2000);
  });
}

async function greetAndUppercase(name) {
  greeting = await greet(name)
  uppercasedGreeting = await uppercaser(greeting)
  spacedGreeting = await spacer(uppercasedGreeting)
  return spacedGreeting
}

/* Uncomment me! #1 */
result = greetAndUppercase('Ducky')
console.log(result)

/* Uncomment me! #2 */
greetAndUppercase('Ducky')
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err)
    })
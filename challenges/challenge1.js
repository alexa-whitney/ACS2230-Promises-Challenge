/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 *    "Step 1" will be printed first, followed by "Step 3", and then "Step 2". 
 *    The console.log() statements for "Step 1" and "Step 3" are outside of the snooze() 
 *    function and will execute immediately, while the console.log() statement for "Step 2" 
 *    is inside the snooze() function and will execute after a 2 second delay due to the 
 *    setTimeout() function.
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 *    Step 1
 *    Step 3
 *    Step 2
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 *    The same order. Even though the delay was changed from 2000ms to 0, the setTimeout() 
 *    function is still an asynchronous function and will be executed asynchronously, even 
 *    if the delay time is set to 0.
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');


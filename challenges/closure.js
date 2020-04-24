// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */
console.log(`INSIDE CLOSURE.JS`)

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
console.log(`TASK ONE EXPLANATION: because nestedFunction is in the scope of myFunction`)

/* Task 2: Counter */

/* Create a function called `factorial` that accepts a parameter and uses a counter to return the factorial
 of that number. For example, `factorial(4)` should return 10 because 1+2+3+4 is 10. */
 console.log(`TASK 2`)
 function factorial(num){
  let a =0
  for(let i =1; i<num+1; i++){
    a = a +i
  }
  return a
 }
 console.log(`Returning factorial ${factorial(4)}`)
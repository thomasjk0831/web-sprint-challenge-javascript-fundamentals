// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


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
//it can access an outside variable from inside of the nested function and store it because of closure.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(param){
  let counter = 1;
  let sum = 0;

  function update(){
    for(let i=0; i<param; i++){
      sum += counter;
      counter++;
    }

    return sum;
  }

 
 return update();
  
}

console.log(summation(4))
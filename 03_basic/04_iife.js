//Immediately Invoked Function Expressions(IIFE)
//to remove global scope variable pollution we use iife

//()function_definition()_function_execution

(function chai() {
  console.log(`DB Connected`);
})();

((name) => {
  console.log(`DB CONNECTED to ${name}`);
})('devesh');

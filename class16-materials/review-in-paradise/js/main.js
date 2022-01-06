// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let faveFood = 'pizza';
alert(faveFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let funTimes = 'this is a string';
alert(funTimes[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function numbering(num1, num2, num3) {
  alert((num1/num2) * num3).toFixed(2))
}

numbering(2, 3, 4);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubing(num) {
  console.log(Math.cbrt(num))
}

cubing(9)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
 function summerTime(month) {
   let lowerCaseMonth = month.toLowerCase()
   if (lowerCaseMonth === "june") ||  (lowerCaseMonth === "july") || (lowerCaseMonth === "august") {
     alert('Yay!') {
       else {
         alert('Boo!')
       }
     }
   }
 }

 summerTime(May);

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skip5(num) {
  for (let i = 1; i <= num; i++) {
    if(i%5 !== 0){
      console.log(i)
    }
  }
}

skip5(10)

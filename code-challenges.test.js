// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.


const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


describe ("fibonacci", () => {
  const fibLength1 = 6
  const fibLength2 = 10
  it ("returns an array that length containing the numbers of the Fibonacci sequence", () => {
  expect (fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
  expect (fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
//ReferenceError: fibonacci1 is not defined

// b) Create the function that makes the test pass.

//psuedo code:
// create a function 'fibonacci'
//use 'num' as a paramter
//use variable 'fib' for 2 numbers [1,1]
//use for loop to iterate through the an array
// use .push to put togther the new array that has the new values.0



const fibonacci = (num) => {
  let fib = [1, 1]
  for (let i = 2; i < num; i++) {
    fib.push(fib[i - 2] + fib[i - 1])
  }
  return fib 
}
//output
// passed!!!!



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


describe ("oddNums", () => {
  const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
  const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
  it ("returns a new array of only odd numbers from least to greatest", () => {
  expect (oddNums(fullArr1)).toEqual([-9, 7, 9, 199])
  expect (oddNums(fullArr2)).toEqual([-823, 7, 23])
  })

})
//ReferenceError: oddNums is not defined

// b) Create the function that makes the test pass.

//psuedo code:
//declare a fucntion oddNums
//declare a new array 
//set conditions for new array
//use .filter to go through the array

//1st try// needed something to be able to read the array beause I have more than just numbers in it. 
// const oddNums = (array) => {
//   let newArr = []
//   for(let i=0; i<array.length; i++){
//     if(array[i] % 2 === 1){
//       newArr.push(array[i])
//     }
//   }
//   return newArr
// }
////////////////
//2nd try

const oddNums = (array) => {
  return array.filter(value => {
      if(value % 2 !== 0 && typeof (value) === "number"){
          return array
      }
  }).sort((a, b) => a - b)
}


//output
// PASS  ./code-challenges.test.js
//   oddNums
//     ✓ returns a new array of only odd numbers from least to greatest (1 ms)




// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


describe ("sumNums", () => {
  const numbersToAdd1 = [2, 4, 45, 9]
  const numbersToAdd2 = [0, 7, -8, 12]
  it ("array of the accumulating sum, empty array should return an empty array", () => {
  expect (sumNums(numbersToAdd1)).toEqual([2, 6, 51, 60])
  expect (sumNums(numbersToAdd2)).toEqual([0, 7, -1, 11])
  expect (sumNums(numbersToAdd3)).toEqual([])
  })

})




// b) Create the function that makes the test pass.

//pusedo code
//create a function called SumNums
//create a parameter called array
//use .map to iterate through the arry
// apply a condition to return the new array with numbers added from the sum of the old array to the new array

const sumNums = (array) => {    let newArray = []  
    return array.map((value, index) => {        if(index > 0){            return newArray = value + newArray        }else {            return newArray = value        }    })}
//output
//passe!!!!
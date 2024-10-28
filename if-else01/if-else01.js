let x = 3

if (0) {
  console.log('hello world')
} else if (x === 2) {
  console.log('x=2')
} else {
  console.log('hell')
}

// Create a variable that contains an array
let myArray = [1, 2, 3, 4, 5, 6]

//using an if statement with else if I want you to check the length of the array
//If it is empty print out 'empty'
if (myArray.length === 0) {
  console.log('empty')
} else if (myArray.length < 5) { //If it has less than 5 elements print out 'small'
  console.log('small')
} else if (myArray.length < 10) { // if it has less than 10 elements print out 'medium'
  console.log('medium')
} else { // Otherwise print out 'large'
  console.log('large')
}
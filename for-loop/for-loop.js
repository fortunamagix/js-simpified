// a variable for starting
// an ending
// how to modify our variable

for (let i = 0; i < 5; i++) { //i++ = i=i+1
  if (i > 2) break
  console.log('Hi')
}

// use instead of forEach function
console.log('\n=== use for loop instead of forEach function ===')
const a = ['a', 'b', 'c']
for (let i = 0; i < a.length; i++) {
  const element = a[i]
  console.log(element)
}

// Create a for loop that loops from 0 to 10 and print out all values from 0 to 10
console.log('\n=== challenge for loop ===')
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break
  }
  console.log(i + 1)
}
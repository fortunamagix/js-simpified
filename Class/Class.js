class Person {
  constructor(name, age, isWorking) {
    this.name = name
    this.age = age
    this.isWorking = isWorking
  }
}

const user = new Person('Witthaya', 39, true)
console.log(user)

// deconstruct v1
console.log('\n=== Deconstruct v1 ===')
const {name, age, isWorking} = user
console.log(`name:${name} age:${age} isWorking:${isWorking}`)

//is equivalent to
console.log('\n=== Class in JS function ===')
const creatPerson = (name, age, isWorking) => ({name, age, isWorking})

const data = creatPerson('Witthaya', 39, true)

console.log(data);

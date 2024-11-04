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
const {name, age, isWorking} = user
console.log(`name:${name} age:${age} isWorking:${true}`)
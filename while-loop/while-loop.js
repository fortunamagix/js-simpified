let i = 0
while (i < 5) {
  console.log(i)
  i++
}

// example
const person = {
  name: 'Witthaya',
  friend: {
    name: 'Kyle',
    friend: {
      name: 'Sally',
    },
  },
}

// ???
let currentPerson = person
while (currentPerson != null) {
  if (currentPerson.name === 'Kyle') continue
  console.log(currentPerson.name)
  currentPerson = currentPerson.friend
}
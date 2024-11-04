/*
Integrating with APIs
  When working with external APIs, async/await makes it easy to handle requests:
  */

async function fetchUser(userID) {
  try {
    const url = 'https://www.freepublicapis.com/api/random'
    const response = await fetch(url)
    const user = response.json()
    if (!response.ok) throw new Error('Network response was not ok')

    console.log(user)
  } catch (error) {
    console.error('My error', error)
  }
}


/*
* Real-World Example
Here’s a more comprehensive example that combines everything:
* */

async function fetchAndProcessData(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    // Process data here
    console.log(data)

    // Example of parallel execution with other tasks
    const task1 = task1 => {
      console.log(task1)
    }
    const task2 = (task2) => {
      console.log(task2)
    }

    const otherResult = await Promise.all([task1, task2])
    console.log('Other results:', otherResult)

  } catch (error) {
    console.error('Error', error)

  }
}

// Usage
const url = 'https://www.freepublicapis.com/api/random'
fetchAndProcessData(url)

/*
* Best Practices
Always handle errors with try/catch.
Keep your asynchronous functions small and focused on a single task.
Use meaningful variable names to improve readability.
Avoid mixing async/await with .then() and .catch() in the same code for better clarity.


*  Next Steps
Practice by writing small asynchronous functions.
Experiment with real APIs (like fetching user data from a public API).
Explore advanced concepts like creating custom async iterators or generators.
* */
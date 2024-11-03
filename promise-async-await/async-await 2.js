/*
* Common Patterns with async/await
a. Error Handling
Using try/catch blocks is a common practice for handling errors in asynchronous functions:
* */
async function getData() {
  try {
    const url = 'https://www.freepublicapis.com/api/random'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('Mistake', error)
  }
}

console.log(getData())

/*
Sequential Execution
When you need to run asynchronous tasks one after another, you can simply await each one:
*/

async function parallelTasks() {
  try {
    const result1 = await task1()
    const result2 = await task2()
    console.log(task1, task2)
  } catch (error) {
    console.error('My error', error)
  }
}

/*
* Parallel Execution
For tasks that can run independently, use Promise.all():
* */

async function palTask2() {
  try {
    const [result1, result2] = await Promise.all([task1(), task2()])
    console.log(result1, result2)
  } catch (error) {
    console.error('My error2', error)
  }
}
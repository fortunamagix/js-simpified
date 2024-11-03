//Creating a Promise:
const myPromise = new Promise((resolve, reject) => {
  // Perform asynchronous task
  if (0) {
    resolve('success')
  } else {
    reject('error')
  }
})
//Using Promises:
myPromise.then((result) => {
  console.log(result)
}).catch((error) => {
  console.error(error)
})


/*
Introducing async/await
  async/await provides a way to work with Promises in a more synchronous manner, making your code cleaner and easier to read.

  Declaring an Async Function:*/

async function fetchData() {
  //function body
}

/*
* Using await:

* You can only use await inside an async function.
await pauses the execution of the function until the Promise is resolved or rejected.
*/

async function fetchData() {
  try {
    const data = await myPromise
    console.log(data)
  } catch (error) {
    console.error('Got some mistake', error)
  }
}
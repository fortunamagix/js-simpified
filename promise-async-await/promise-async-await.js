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
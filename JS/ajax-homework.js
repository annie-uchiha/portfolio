//1. Create a promise that resolves to the string "Hello, Promises!"

const myPromise = new Promise((resolve, reject) => {
  resolve("Hello, Promises!");
});

myPromise.then((message) => {
  console.log(message);
});

/*2. Create a function that returns a promise. The promise should resolve after
a random delay (between 1 to 5 seconds) with a message like "Promise resolved after X seconds".*/

function delayedPromise() {
  const delay = Math.floor(Math.random() * 5) + 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${delay} seconds`);
    }, delay * 1000);
  });
}

delayedPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

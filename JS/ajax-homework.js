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

//3. Ask a user to submit an artist name and song and after 2 seconds add it to the screen

function submitArtistAndSong() {
  const artist = document.getElementById("artistInput").value;
  const song = document.getElementById("song").value;

  addArtistAndSong(artist, song)
    .then((message) => {
      const resultDiv = document.getElementById("resultArtistAndSong");
      resultDiv.innerHTML = message;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function addArtistAndSong(artist, song) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!artist || !song) {
        reject(new Error("Artist and song must be provided"));
      } else {
        const message = `Artist: ${artist}, Song: ${song}`;
        resolve(message);
      }
    }, 2000);
  });
}

/* 4. Ask a user for age, if the input is not a number or a number over 120 or below 0,
show error in console, else print in on the page with a welcome message */
function submitAge() {
  const age = document.getElementById("ageInput").value;
  checkAge(age)
    .then((message) => {
      const resultDiv = document.getElementById("resultAge");
      resultDiv.innerHTML = message;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function checkAge(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(age) || age < 0 || age > 120) {
        reject(
          new Error("Invalid age. Please enter a number between 0 and 120.")
        );
      } else {
        const message = `Welcome! Your age is ${age}.`;
        resolve(message);
      }
    }, 2000);
  });
}

let songs = [];

function addSong() {
  const songName = document.getElementById("songName").value;
  const artist = document.getElementById("artist").value;
  const runtime = document.getElementById("runtime").value;

  songs.push({ name: songName, artist: artist, runtime: runtime });

  displaySongs();
}

function deleteSong(index) {
  songs.splice(index, 1);
  displaySongs();
}

function displaySongs() {
  const songListElement = document.getElementById("songList");
  songListElement.innerHTML = "";

  songs.forEach((song, index) => {
    const songElement = document.createElement("div");
    songElement.innerHTML = `
      <strong>Song:</strong> ${song.name} - <strong>Artist:</strong> ${song.artist}<br>
      <strong>Runtime:</strong> ${song.runtime}<br>
      <button onclick="deleteSong(${index})">Delete</button>
    `;

    songListElement.appendChild(songElement);
  });
}

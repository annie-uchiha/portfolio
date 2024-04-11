var playList = [
  {
    author: "BILLIE EILISH",
    song: "BURY A FRIEND",
  },
  {
    author: "IMAGINE DRAGONS",
    song: "NATURAL",
  },
  {
    author: "EMINEM",
    song: "LOOSE YOURSELF",
  },
  {
    author: "KATE BUSH",
    song: "RUNNING UP THAT HILL",
  },
  {
    author: "THE PLATTERS",
    song: "SIXTEEN TONS",
  },
  {
    author: "TERIYAKI BOYZ",
    song: "TOKYO DRIFT",
  },
  {
    author: "NEONI",
    song: "DARKSIDE",
  },
  {
    author: "NAS",
    song: "N Y STATE OF MIND",
  },
];

var trackList = document.getElementById("trackList");

playList.forEach(function (track, index) {
  var listItem = document.createElement("li");

  listItem.textContent = index + 1 + ". " + track.author + " - " + track.song;

  trackList.appendChild(listItem);
});

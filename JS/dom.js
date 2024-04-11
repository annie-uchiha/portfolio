document.addEventListener("DOMContentLoaded", function () {
  // Track list functionality
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

  // Modal box functionality
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("openBtn");
  var closeBtn = document.querySelector(".close");

  btn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

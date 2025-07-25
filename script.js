// main
let jokeDiv = document.getElementById("joke");
let fetchButton = document.getElementById("fetchButton");
let thumbsUpButton = document.getElementById("thumbsUpButton");
let thumbsDownButton = document.getElementById("thumbsDownButton");
let counterText = document.getElementById("counter");
// countLikes
let likeCount = 0;
// functions
fetchButton.onclick = function () {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      jokeDiv.innerText = data.value;
    });
};
// thumbsButton
thumbsUpButton.onclick = function () {
  likeCount = likeCount + 1;
  counterText.innerText = "Total Like & Dislike: " + likeCount;
};

thumbsDownButton.onclick = function () {
  if (likeCount > 0) {
    likeCount = likeCount - 1;
    counterText.innerText = "Total Like & Dislike: " + likeCount;
  }
};

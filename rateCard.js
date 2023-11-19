let currentRating = 0;
let t = TrelloPowerUp.iframe();
function highlightStars(targetRating) {
  const stars = document.querySelectorAll(".star");

  stars.forEach((star) => {
    const rating = parseInt(star.getAttribute("data-rating"));

    if (rating <= targetRating) {
      star.style.color = "gold";
    } else {
      star.style.color = "white";
    }
  });
}

function updateRating(targetRating) {
  currentRating = targetRating;
  highlightStars(targetRating);
}

function submitRating() {
  alert("Rating submitted: " + currentRating);
  return t.set("card", "shared", "star", currentRating).then(function () {
    t.closePopup();
  });

  t.render(function () {
    t.sizeTo("#star-rating").done();
  });
}

document.getElementById("star-rating").addEventListener("click", (event) => {
  if (event.target.classList.contains("star")) {
    const clickedRating = parseInt(event.target.getAttribute("data-rating"));
    updateRating(clickedRating);
  }
});

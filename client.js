console.log("Hello World!");
var GREY_ROCKET_ICON =
  "https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717";
var WHITE_ROCKET_ICON =
  "https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Fwhite-rocket-ship.png?1495811896182";
var TrelloPowerUp = window.TrelloPowerUp;
var WHITE_ICON =
  "https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-white.svg";
var BLACK_ICON =
  "https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-black.svg";
var STAR_ICON =
  "https://i.ibb.co/47xmGzd/star.png";
var WHITE_STAR = 
    "https://i.ibb.co/St68QKP/star-616822.png"

var onBtnClick = function (t, opts) {
  console.log("Someone clicked the button");
};
TrelloPowerUp.initialize({
  "card-buttons": function (t, options) {
    return [
      {
        icon: STAR_ICON,
        text: "Rate Your Card",
        callback: function (t) {
          return t.popup({
            title: "Card Rating",
            url: "rateCard.html",
          });
        },
      },
    ];
  },
  "card-badges": function (t, options) {
    return t.get("card", "shared", "star").then(function (star) {
      return [
        {
          icon: star ? STAR_ICON : WHITE_STAR,
          text: star || "No Ratings!",
          color: star ? "yellow" : "white",
        },
      ];
    });
  },
  "card-detail-badges": function (t, options) {
    return t.get("card", "shared", "star").then(function (star) {
      return [
        {
          icon: star ? STAR_ICON : WHITE_STAR,
          text:`${star} STAR` || "No Ratings!",
          color: star ? "yellow" : "white",
          callback: function (t) {
            return t.popup({
              title: "Rate Your Card",
              url: "rateCard.html",
            });
          },
        },
      ];
    });
  },
  "board-buttons": function (t, opts) {
    return [
      {
        // we can either provide a button that has a callback function
        icon: {
          dark: STAR_ICON,
          light: STAR_ICON,
        },
        text: "Rate Card",
        callback: onBtnClick,
        condition: "edit",
      },
    ];
  },
});

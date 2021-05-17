for (var n = 0; n < document.querySelectorAll(".trumpet").length; n++) {
  document.querySelectorAll("button")[n].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}

addEventListener("keydown", function(event) {
  makeSound(event.key);
})

function makeSound(key) {
  switch (key) {
    case "0":
      var E0 = new Audio('sounds/0.mp3');
      E0.play();
      break;
    case "1":
      var C1 = new Audio('sounds/1.mp3');
      C1.play();
      break;
    case "2":
      var D2 = new Audio('sounds/2.mp3');
      D2.play();
      break;
    case "3":
      var E3 = new Audio('sounds/3.mp3');
      E3.play();
      break;
    case "4":
      var F4 = new Audio('sounds/4.mp3');
      F4.play();
      break;
    case "5":
      var G5 = new Audio('sounds/5.mp3');
      G5.play();
      break;
    case "6":
      var A6 = new Audio('sounds/6.mp3');
      A6.play();
      break;
    case "7":
      var B7 = new Audio('sounds/7.mp3');
      B7.play();
      break;
    case "8":
      var C8 = new Audio('sounds/8.mp3');
      C8.play();
      break;
    case "9":
      var D9 = new Audio('sounds/9.mp3');
      D9.play();
      break;
  }
}

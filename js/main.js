import Kanban from "./view/Kanban.js";

var header = $('body');

if (document.images) {
  var img1 = new Image();
  img1.src = "./img/1.webp";
  var img2 = new Image();
  img2.src = "./img/2.webp";
  var img3 = new Image();
  img3.src = "./img/3.webp";
  var img4 = new Image();
  img4.src = "./img/4.webp";
  var img5 = new Image();
  img5.src = "./img/5.webp";
  var img6 = new Image();
  img6.src = "./img/6.webp";
}

var backgrounds = new Array(
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
);
    
var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 10000);

header.css('background-image', backgrounds[0]);

new Kanban(
	document.querySelector(".kanban")
);

import Kanban from "./view/Kanban.js";

var header = $('body');

var backgrounds = new Array(
    'url(./img/1.webp)'
  , 'url(./img/2.webp)'
  , 'url(./img/3.webp)'
  , 'url(./img/4.webp)'
  , 'url(./img/5.webp)'
  , 'url(./img/6.webp)'
);

var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

preload(
  "./img/1.webp)",
  "./img/1.webp)",
  "./img/3.webp)",
  "./img/4.webp)",
  "./img/5.webp)",
  "./img/6.webp)",
)

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 5000);

header.css('background-image', backgrounds[0]);

new Kanban(
	document.querySelector(".kanban")
);

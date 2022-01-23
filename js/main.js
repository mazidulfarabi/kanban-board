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

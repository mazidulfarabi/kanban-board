import Kanban from "./view/Kanban.js";

var header = $('body');

function preloadImage(url)
{
    var img=new Image();
    img.src=url;
}

preloadImage(
  "./img/1.webp",
  "./img/2.webp",
  "./img/3.webp",
  "./img/4.webp",
  "./img/5.webp",
  "./img/6.webp"
)

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

import Kanban from "./view/Kanban.js";

var header = $('body');

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

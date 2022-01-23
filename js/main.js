import Kanban from "./view/Kanban.js";

var i = 0;
var images = [];
var slideTime = 5000; // 3 seconds

images[0] = '../img/2.webp';
images[1] = '../img/3.webp';
images[2] = '../img/4.webp';
images[3] = '../img/5.webp';
images[4] = '../img/6.webp';
images[5] = '../img/1.webp';

function changePicture() {
    document.body.style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.addEventListener('load', 
  function() { 

changePicture;
var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "http://domain.tld/gallery/image-001.jpg",
    "http://domain.tld/gallery/image-002.jpg",
    "http://domain.tld/gallery/image-003.jpg"
)

}, false);

new Kanban(
	document.querySelector(".kanban")
);

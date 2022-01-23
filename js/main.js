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

window.onload = changePicture;

new Kanban(
	document.querySelector(".kanban")
);

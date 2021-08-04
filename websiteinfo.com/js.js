let hungarImg1 = document.getElementById("hangar-img1");
let hungarImg2 = document.getElementById("hangar-img2");
let hungarImg3 = document.getElementById("hangar-img3");
let hungarImg4 = document.getElementById("hangar-img4");
let hungarImg5 = document.getElementById("hangar-img5");
let hungarImg6 = document.getElementById("hangar-img6");
let hungarImg7 = document.getElementById("hangar-img7");
let hungarImg8 = document.getElementById("hangar-img8");
let hungarImg9 = document.getElementById("hangar-img9");

hungarImg1.onmouseover = function () {
    hungarImg1.src = "img/hangar1v1.png";
}
hungarImg1.onmouseout = function () {
    hungarImg1.src = "img/hangar1.png";
}

hungarImg2.onmouseover = function () {
    hungarImg2.src = "img/hangar2v1.png";
}
hungarImg2.onmouseout = function () {
    hungarImg2.src = "img/hangar2.png";
}

hungarImg3.onmouseover = function () {
    hungarImg3.src = "img/hangar3v1.png";
}
hungarImg3.onmouseout = function () {
    hungarImg3.src = "img/hangar3.png";
}

hungarImg4.onmouseover = function () {
    hungarImg4.src = "img/hangar4v1.png";
}
hungarImg4.onmouseout = function () {
    hungarImg4.src = "img/hangar4.png";
}

hungarImg5.onmouseover = function () {
    hungarImg5.src = "img/hangar5v1.png";
}
hungarImg5.onmouseout = function () {
    hungarImg5.src = "img/hangar5.png";
}

hungarImg6.onmouseover = function () {
    hungarImg6.src = "img/hangar1v1.png";
}
hungarImg6.onmouseout = function () {
    hungarImg6.src = "img/hangar1.png";
}

hungarImg7.onmouseover = function () {
    hungarImg7.src = "img/hangar6v1.png";
}
hungarImg7.onmouseout = function () {
    hungarImg7.src = "img/hangar6.png";
}

hungarImg8.onmouseover = function () {
    hungarImg8.src = "img/hangar7v1.png";
}
hungarImg8.onmouseout = function () {
    hungarImg8.src = "img/hangar7.png";
}

hungarImg9.onmouseover = function () {
    hungarImg9.src = "img/hangar8v1.png";
}
hungarImg9.onmouseout = function () {
    hungarImg9.src = "img/hangar8.png";
}


// Скрипт для работы карты
var map;
function initMap() {
    map = new ymaps.Map("yandexmap", {
        center: [53.309613, 83.036420],
        zoom: 13
    });
}
ymaps.ready(initMap);


// Работа паралакса

//Извлекаем из DOM элемент кнопку из шапки
let call = document.getElementById("order-call");
//Извлекаем из DOM элемент блок light-box
let lightBg = document.getElementById("light-bg");

let lightBlock = document.getElementById("lightBox-blog");




//Кликаем по кнопке вверху
call.onclick = function() {
    lightBg.style.visibility = "visible";
    lightBg.style.opacity = "0.6";
    lightBg.style.transition = "all 0.8s";
    lightBg.style.zIndex = "10";
    lightBlock.style.visibility = "visible";
    lightBlock.style.opacity = "1";
    lightBlock.style.transition = "all 0.4s";
    lightBlock.style.zIndex = "11";
}
//Кликаем по фону light-box
lightBg.onclick = function() {
    lightBg.style.visibility = "hidden";
    lightBg.style.opacity = "0";
    lightBg.style.transition = "all 0.8s";
    lightBg.style.zIndex = "-5";
    lightBlock.style.visibility = "hidden";
    lightBlock.style.opacity = "0";
    lightBlock.style.transition = "all 0.4s";
    lightBlock.style.zIndex = "-5";
}


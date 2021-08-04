window.onload = function() {
	openSvetPodskazka1();
	openSvetPodskazka3();
	newLogo();
}


/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*Работа по извлечению высоты окна клиента и работа с ней*/
/*let heightClient = document.documentElement.clientHeight;
let resultHeightClient = heightClient - 210;
let blockLogo = document.getElementById("block-logo");


function newLogo() {
	document.querySelector('#block-logo').style.height = resultHeightClient + 'px';	
	setTimeout(newLogo1, 1000);

		function newLogo1() {
		document.querySelector('#block-logo').style.height = resultHeightClient + 'px';	
		setTimeout(newLogo, 1000);
	}
}*/

















/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/

/*Код для девочки блондинки*/
let headBlond = document.getElementById("head-blond");//Извлекаем обект "Голова блондинки" из DOM
let bodyBlond = document.getElementById("body-blond");//Извлекаем обект "Тело блондинки" из DOM
let background = document.getElementById("background");
let podskazka1 = document.getElementById("podskazka1");
let podskazka1Link = document.getElementById("podskazka1-link");
let podskazka2 = document.getElementById("podskazka2");
let podskazka2Link = document.getElementById("podskazka2-link");
let podskazka3 = document.getElementById("podskazka3");
let podskazka3Link = document.getElementById("podskazka3-link");
let podskazka4 = document.getElementById("podskazka4");
let podskazka4Link = document.getElementById("podskazka4-link");
let num = 0;


bodyBlond.onmouseover = function() {  //При наведени курсора на объект "Тело блондинки" запускается функция, которая изменяет css свойста объекта "Голова блондинки"
	//При наведенни на объект "Тело блондинки" проявляется текстовая подсказка
	podskazka1.style.opacity = "1"; 
	podskazka1.style.transition = "1s";
	podskazka1Link.style.transition = "1s";
	podskazka1Link.style.visibility = "visible";
	//Блок кода для появления заднего фона при наведении на объект
	headBlond.style.zIndex = "3";
	bodyBlond.style.zIndex = "3";
	//podskazka1.style.zIndex = "3";
	background.style.zIndex = "2";
	background.style.opacity = "0.4";
	background.style.transition = "0.3s"
	//Блок кода для анимации подобъекта
	headBlond.style.transform = "rotate(12deg)";
	headBlond.style.transition = "transform 1.5s";
	headBlond.style.cursor = "pointer";
	bodyBlond.style.cursor = "pointer";
	setTimeout(leftBodyBlond, 1500); //Вызываем функцию "leftBodyBlond" один раз через 1500 мс
	//Для остальных подсказок, чтобы они убирались к черту
	//podskazka2
	podskazka2.style.opacity = "0";
	podskazka2.style.transition = "0.5s";
	podskazka2Link.style.transition = "0.5s";
	podskazka2Link.style.visibility = "hidden";
	//podskazka3
	podskazka3.style.opacity = "0";
	podskazka3.style.transition = "0.5s";
	podskazka3Link.style.transition = "0.5s";
	podskazka3Link.style.visibility = "hidden";
	//podskazka4
	podskazka4.style.opacity = "0";
	podskazka4.style.transition = "0.5s";
	podskazka4Link.style.transition = "0.5s";
	podskazka4Link.style.visibility = "hidden";
	//Счетчик
	num = 1;
	closeSvetPodskazka1();
}
function leftBodyBlond(){ // Функция "leftBodyBlond" изменяет css свойста объекта "Голова блондинки"
	headBlond.style.transform = "rotate(-12deg)";
	setTimeout(midlBodyBlond, 1500); //Вызываем функцию "midlBodyBlond" один раз через 1500 мс
}
function midlBodyBlond(){ //Функция "midlBodyBlond" изменяет css свойста объекта "Голова блондинки"
	headBlond.style.transform = "rotate(0deg)";
}


bodyBlond.onmouseout = function() {
	podskazka1.style.opacity = "1";
	podskazka1.style.transition = "1s";
	podskazka1Link.style.transition = "1s";
	podskazka1Link.style.visibility = "visible";
	//Блок кода для удаления заднего фона при наведении на объект
	headBlond.style.zIndex = "1";
	bodyBlond.style.zIndex = "1";
	//podskazka1.style.zIndex = "1";
	background.style.zIndex = "1";
	background.style.opacity = "0";
	background.style.transition = "0.3s";
	//Для остальных подсказок, чтобы они появилиись
	//podskazka2
	podskazka2.style.opacity = "1";
	podskazka2.style.transition = "1s";
	podskazka2Link.style.transition = "1s";
	podskazka2Link.style.visibility = "visible";
	//podskazka3
	podskazka3.style.opacity = "1";
	podskazka3.style.transition = "1s";
	podskazka3Link.style.transition = "1s";
	podskazka3Link.style.visibility = "visible";
	//podskazka4
	podskazka4.style.opacity = "1";
	podskazka4.style.transition = "1s";
	podskazka4Link.style.transition = "1s";
	podskazka4Link.style.visibility = "visible";
	//Счетчик
	num = 0;
	//timePodskazki1();
	//Запускаем функции
		/*timePodskazki2();
		timePodskazki3();
		timePodskazki4();*/
		/*closeSvetPodskazka1();
		closeSvetPodskazka2();
		closeSvetPodskazka3();
		closeSvetPodskazka4();*/
		podskazka2.style.display = "block";
		podskazka3.style.display = "block";
		podskazka4.style.display = "block";
}





/*----------------------*/

headBlond.onmouseover = function() {  //При наведени курсора на объект "ГОЛОВА БЛОНДИНКИ" запускается функция, которая изменяет css свойста объекта "ГОЛОВА БЛОНДИНКИ"
	//При наведенни на объект "ГОЛОВА БЛОНДИНКИ" проявляется текстовая подсказка
	podskazka1.style.opacity = "1"; 
	podskazka1.style.transition = "1s";
	podskazka1Link.style.transition = "1s";
	podskazka1Link.style.visibility = "visible";
	//Блок кода для появления заднего фона при наведении на объект
	headBlond.style.zIndex = "3";
	bodyBlond.style.zIndex = "3";
	//podskazka1.style.zIndex = "3";
	background.style.zIndex = "2";
	background.style.opacity = "0.4";
	background.style.transition = "0.3s";
	//Блок кода для анимации подобъекта
	headBlond.style.transform = "rotate(12deg)";
	headBlond.style.transition = "transform 1.5s";
	headBlond.style.cursor = "pointer";
	bodyBlond.style.cursor = "pointer";
	setTimeout(leftBodyBlond, 1500); //Вызываем функцию "leftBodyBlond" один раз через 1500 мс
	//Для остальных подсказок, чтобы они убирались к черту
	//podskazka2
	podskazka2.style.opacity = "0";
	podskazka2.style.transition = "0.5s";
	podskazka2Link.style.transition = "0.5s";
	podskazka2Link.style.visibility = "hidden";
	//podskazka3
	podskazka3.style.opacity = "0";
	podskazka3.style.transition = "0.5s";
	podskazka3Link.style.transition = "0.5s";
	podskazka3Link.style.visibility = "hidden";
	//podskazka4
	podskazka4.style.opacity = "0";
	podskazka4.style.transition = "0.5s";
	podskazka4Link.style.transition = "0.5s";
	podskazka4Link.style.visibility = "hidden";
	//Счетчик
	num = 1;
	closeSvetPodskazka1();
}
function leftHeadBodyBlond(){ // Функция "leftHeadBodyBlond" изменяет css свойста объекта "Голова блондинки"
	headBlond.style.transform = "rotate(-12deg)";
	setTimeout(midlHeadBodyBlond, 1500); //Вызываем функцию "midlHeadBodyBlond" один раз через 1000 мс
}
function midlHeadBodyBlond(){ //Функция "midlHeadBodyBlond" изменяет css свойста объекта "Голова блондинки"
	headBlond.style.transform = "rotate(0deg)";
}


headBlond.onmouseout = function() {
	podskazka1.style.opacity = "1";
	podskazka1.style.transition = "1s";
	podskazka1Link.style.transition = "1s";
	podskazka1Link.style.visibility = "visible";
	//Блок кода для удаления заднего фона при наведении на объект
	headBlond.style.zIndex = "1";
	bodyBlond.style.zIndex = "1";
	//podskazka1.style.zIndex = "1";
	background.style.zIndex = "1";
	background.style.opacity = "0";
	background.style.transition = "0.3s";
	//Для остальных подсказок, чтобы они появилиись
	//podskazka2
	podskazka2.style.opacity = "1";
	podskazka2.style.transition = "1s";
	podskazka2Link.style.transition = "1s";
	podskazka2Link.style.visibility = "visible";
	//podskazka3
	podskazka3.style.opacity = "1";
	podskazka3.style.transition = "1s";
	podskazka3Link.style.transition = "1s";
	podskazka3Link.style.visibility = "visible";
	//podskazka4
	podskazka4.style.opacity = "1";
	podskazka4.style.transition = "1s";
	podskazka4Link.style.transition = "1s";
	podskazka4Link.style.visibility = "visible";
	//Счетчик
	num = 0;
	podskazka2.style.display = "block";
	podskazka3.style.display = "block";
	podskazka4.style.display = "block";
}

/*----------------------*/
//Код для подсказки к объекту

podskazka1Link.onmouseover = function(){
	
	//Блок кода для появления заднего фона при наведении на объект
	headBlond.style.zIndex = "3";
	bodyBlond.style.zIndex = "3";
	//podskazka1.style.zIndex = "3";
	background.style.zIndex = "2";
	background.style.opacity = "0.4";
	background.style.transition = "0.3s";
	num = 1;
	closeSvetPodskazka1();
}
podskazka1.onmouseout = function(){
	//Блок кода для удаления заднего фона при наведении на объект
	headBlond.style.zIndex = "1";
	bodyBlond.style.zIndex = "1";
	//podskazka1.style.zIndex = "1";
	background.style.zIndex = "1";
	background.style.opacity = "0";
	background.style.transition = "0.3s";
	//Счетчик
	num = 0;
	podskazka2.style.display = "block";
	podskazka3.style.display = "block";
	podskazka4.style.display = "block";
}








/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/


/*Код для девочки с голубым рюкзаком*/
let orangeGirlBlueBag = document.getElementById("orange-girl-blue-bag");//Извлекаем обект "ТЕЛО РЫЖЕЙ ДЕВОЧКИ С ГОЛУБЫМ ПОРТФЕЛЕМ" из DOM
let armOrangeGirlBlueBag = document.getElementById("arm-orange-girl-blue-bag");//Извлекаем обект "РУКИ РЫЖЕЙ ДЕВОЧКИ С ГОЛУБЫМ ПОРТФЕЛЕМ" из DOM


orangeGirlBlueBag.onmouseover = function() {  //При наведени курсора на объект "ТЕЛО РЫЖЕЙ ДЕВОЧКИ С ГОЛУБЫМ ПОРТФЕЛЕМ" запускается функция, которая изменяет css свойста объекта "РУКИ РЫЖЕЙ ДЕВОЧКИ С ГОЛУБЫМ ПОРТФЕЛЕМ"
	//При наведенни на объект "ТЕЛО РЫЖЕЙ ДЕВОЧКИ С ГОЛУБЫМ ПОРТФЕЛЕМ" проявляется текстовая подсказка
	podskazka2.style.opacity = "1"; 
	podskazka2.style.transition = "1s";
	podskazka2Link.style.transition = "1s";
	podskazka2Link.style.visibility = "visible";
	//Блок кода для появления заднего фона при наведении на объект
	armOrangeGirlBlueBag.style.zIndex = "3";
	orangeGirlBlueBag.style.zIndex = "3";
	//podskazka2.style.zIndex = "3";
	background.style.zIndex = "2";
	background.style.opacity = "0.4";
	background.style.transition = "0.3s";
	//Блок кода для анимации подобъекта
	armOrangeGirlBlueBag.style.transform = "rotate(20deg)";
	armOrangeGirlBlueBag.style.transition = "transform 1s";
	armOrangeGirlBlueBag.style.cursor = "pointer";
	orangeGirlBlueBag.style.cursor = "pointer";
	setTimeout(leftGirlBlueBag, 1000); //Вызываем функцию "leftGirlBlueBag" один раз через 1000 мс
	//Для остальных подсказок, чтобы они убирались к черту
	//podskazka1
	podskazka1.style.opacity = "0";
	podskazka1.style.transition = "0.5s";
	podskazka1Link.style.transition = "0.5s";
	podskazka1Link.style.visibility = "hidden";
	//podskazka3
	podskazka3.style.opacity = "0";
	podskazka3.style.transition = "0.5s";
	podskazka3Link.style.transition = "0.5s";
	podskazka3Link.style.visibility = "hidden";
	//podskazka4
	podskazka4.style.opacity = "0";
	podskazka4.style.transition = "0.5s";
	podskazka4Link.style.transition = "0.5s";
	podskazka4Link.style.visibility = "hidden";
	//Счетчик
	num = 2;
	closeSvetPodskazka2();

}
function leftGirlBlueBag(){ // Функция "leftGirlBlueBag" изменяет css свойста объекта "РУКИ РЫЖЕЙ ДЕВОЧКИ С ГОЛУБЫМ ПОРТФЕЛЕМ"
	armOrangeGirlBlueBag.style.transform = "rotate(-30deg)";
	setTimeout(midlGirlBlueBag, 1000); //Вызываем функцию "midlGirlBlueBag" один раз через 1000 мс
}
function midlGirlBlueBag(){ //Функция "midlGirlBlueBag" изменяет css свойста объекта "РУКИ РЫЖЕЙ ДЕВОЧКИ С ГОЛУБЫМ ПОРТФЕЛЕМ"
	armOrangeGirlBlueBag.style.transform = "rotate(0deg)";
}


orangeGirlBlueBag.onmouseout = function() {
	podskazka2.style.opacity = "1";
	podskazka2.style.transition = "1s";
	podskazka2Link.style.transition = "1s";
	podskazka2Link.style.visibility = "visible";
	//Блок кода для удаления заднего фона при наведении на объект
	armOrangeGirlBlueBag.style.zIndex = "1";
	orangeGirlBlueBag.style.zIndex = "1";
	//podskazka2.style.zIndex = "1";
	background.style.zIndex = "1";
	background.style.opacity = "0";
	background.style.transition = "0.3s";
	//Для остальных подсказок, чтобы они появилиись
	//podskazka1
	podskazka1.style.opacity = "1";
	podskazka1.style.transition = "1s";
	podskazka1Link.style.transition = "1s";
	podskazka1Link.style.visibility = "visible";
	//podskazka3
	podskazka3.style.opacity = "1";
	podskazka3.style.transition = "1s";
	podskazka3Link.style.transition = "1s";
	podskazka3Link.style.visibility = "visible";
	//podskazka4
	podskazka4.style.opacity = "1";
	podskazka4.style.transition = "1s";
	podskazka4Link.style.transition = "1s";
	podskazka4Link.style.visibility = "visible";
	//Счетчик
	num = 0;
	//timePodskazki2();
	podskazka1.style.display = "block";
	podskazka3.style.display = "block";
	podskazka4.style.display = "block";
}






/*----------------------*/


armOrangeGirlBlueBag.onmouseover = function() {  //При наведени курсора на объект "РУКИ РЫЖЕЙ ДЕВОЧКИ С ГОЛУБЫМ ПОРТФЕЛЕМ" запускается функция, которая изменяет css свойста объекта "РУКИ РЫЖЕЙ ДЕВОЧКИ С ГОЛУБЫМ ПОРТФЕЛЕМ"
	//При наведенни на объект "ТЕЛО РЫЖЕЙ ДЕВОЧКИ С ГОЛУБЫМ ПОРТФЕЛЕМ" проявляется текстовая подсказка
	podskazka2.style.opacity = "1"; 
	podskazka2.style.transition = "1s";
	podskazka2Link.style.transition = "1s";
	podskazka2Link.style.visibility = "visible";
	//Блок кода для появления заднего фона при наведении на объект
	armOrangeGirlBlueBag.style.zIndex = "3";
	orangeGirlBlueBag.style.zIndex = "3";
	//podskazka2.style.zIndex = "3";
	background.style.zIndex = "2";
	background.style.opacity = "0.4";
	background.style.transition = "0.3s";
	//Блок кода для анимации подобъекта
	armOrangeGirlBlueBag.style.transform = "rotate(20deg)";
	armOrangeGirlBlueBag.style.transition = "transform 1s";
	armOrangeGirlBlueBag.style.cursor = "pointer";
	orangeGirlBlueBag.style.cursor = "pointer";
	setTimeout(leftGirlBlueBag, 1000); //Вызываем функцию "leftGirlBlueBag" один раз через 1000 мс
	//Для остальных подсказок, чтобы они убирались к черту
	//podskazka1
	podskazka1.style.opacity = "0";
	podskazka1.style.transition = "0.5s";
	podskazka1Link.style.transition = "0.5s";
	podskazka1Link.style.visibility = "hidden";
	//podskazka3
	podskazka3.style.opacity = "0";
	podskazka3.style.transition = "0.5s";
	podskazka3Link.style.transition = "0.5s";
	podskazka3Link.style.visibility = "hidden";
	//podskazka4
	podskazka4.style.opacity = "0";
	podskazka4.style.transition = "0.5s";
	podskazka4Link.style.transition = "0.5s";
	podskazka4Link.style.visibility = "hidden";
	//Счетчик
	num = 2;
	closeSvetPodskazka2();
}
function leftHeadGirlBlueBag(){ // Функция "leftHeadGirlBlueBag" изменяет css свойста объекта "РУКИ РЫЖЕЙ ДЕВОЧКИ С ГОЛУБЫМ ПОРТФЕЛЕМ"
	armOrangeGirlBlueBag.style.transform = "rotate(-20deg)";
	setTimeout(midlHeadGirlBlueBag, 1000); //Вызываем функцию "midlHeadGirlBlueBag" один раз через 1000 мс
}
function midlHeadGirlBlueBag(){ //Функция "midlHeadGirlBlueBag" изменяет css свойста объекта "РУКИ РЫЖЕЙ ДЕВОЧКИ С ГОЛУБЫМ ПОРТФЕЛЕМ"
	armOrangeGirlBlueBag.style.transform = "rotate(0deg)";
}


armOrangeGirlBlueBag.onmouseout = function() {
	podskazka2.style.opacity = "1";
	podskazka2.style.transition = "1s";
	podskazka2Link.style.transition = "1s";
	podskazka2Link.style.visibility = "visible";
	//Блок кода для удаления заднего фона при наведении на объект
	armOrangeGirlBlueBag.style.zIndex = "1";
	orangeGirlBlueBag.style.zIndex = "1";
	//podskazka2.style.zIndex = "1";
	background.style.zIndex = "3";
	background.style.opacity = "0";
	background.style.transition = "0.3s";
	//Для остальных подсказок, чтобы они появилиись
	//podskazka1
	podskazka1.style.opacity = "1";
	podskazka1.style.transition = "1s";
	podskazka1Link.style.transition = "1s";
	podskazka1Link.style.visibility = "visible";
	//podskazka3
	podskazka3.style.opacity = "1";
	podskazka3.style.transition = "1s";
	podskazka3Link.style.transition = "1s";
	podskazka3Link.style.visibility = "visible";
	//podskazka4
	podskazka4.style.opacity = "1";
	podskazka4.style.transition = "1s";
	podskazka4Link.style.transition = "1s";
	podskazka4Link.style.visibility = "visible";
	//Счетчик
	num = 0;
	//timePodskazki2();
	podskazka1.style.display = "block";
	podskazka3.style.display = "block";
	podskazka4.style.display = "block";
}



/*----------------------*/
//Код для подсказки к объекту
podskazka2Link.onmouseover = function(){
	//Блок кода для появления заднего фона при наведении на объект
	armOrangeGirlBlueBag.style.zIndex = "3";
	orangeGirlBlueBag.style.zIndex = "3";
	//podskazka2.style.zIndex = "3";
	background.style.zIndex = "2";
	background.style.opacity = "0.4";
	background.style.transition = "0.3s"
	//Счетчик
	num = 2;
	closeSvetPodskazka2();
}
podskazka2.onmouseout = function(){
	//Блок кода для удаления заднего фона при наведении на объект
	armOrangeGirlBlueBag.style.zIndex = "1";
	orangeGirlBlueBag.style.zIndex = "1";
	//podskazka2.style.zIndex = "3";
	background.style.zIndex = "1";
	background.style.opacity = "0";
	background.style.transition = "0.3s";
	//Счетчик
	num = 0;
	podskazka1.style.display = "block";
	podskazka3.style.display = "block";
	podskazka4.style.display = "block";
}






/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/


/*Код для девочки с розовым портфелем*/
let orangeGirlPinkBag = document.getElementById("orange-girl-pink-bag");//Извлекаем обект "ТЕЛО РЫЖЕЙ ДЕВОЧКИ С РОЗОВЫМ ПОРТФЕЛЕМ" из DOM
let armOrangeGirlPinkBag = document.getElementById("arm-orange-girl-pink-bag");//Извлекаем обект "РУКИ РЫЖЕЙ ДЕВОЧКИ С РОЗОВЫМ ПОРТФЕЛЕМ" из DOM


orangeGirlPinkBag.onmouseover = function() {  //При наведени курсора на объект "ТЕЛО РЫЖЕЙ ДЕВОЧКИ С РОЗОВЫМ ПОРТФЕЛЕМ" запускается функция, которая изменяет css свойста объекта "РУКИ РЫЖЕЙ ДЕВОЧКИ С РОЗОВЫМ ПОРТФЕЛЕМ"
	//При наведенни на объект "ТЕЛО РЫЖЕЙ ДЕВОЧКИ С РОЗОВЫМ ПОРТФЕЛЕМ" проявляется текстовая подсказка
	podskazka3.style.opacity = "1"; 
	podskazka3.style.transition = "1s";
	podskazka3Link.style.transition = "1s";
	podskazka3Link.style.visibility = "visible";
	//Блок кода для появления заднего фона при наведении на объект
	armOrangeGirlPinkBag.style.zIndex = "3";
	orangeGirlPinkBag.style.zIndex = "3";
	//podskazka3.style.zIndex = "3";
	background.style.zIndex = "2";
	background.style.opacity = "0.4";
	background.style.transition = "0.3s";
	//Блок кода для анимации подобъекта
	armOrangeGirlPinkBag.style.transform = "rotate(-20deg)";
	armOrangeGirlPinkBag.style.transition = "transform 1s";
	orangeGirlPinkBag.style.cursor = "pointer";
	armOrangeGirlPinkBag.style.cursor = "pointer";
	setTimeout(leftHeadGirlPinkBag, 1000); //Вызываем функцию "leftHeadGirlPinkBag" один раз через 1000 мс
	//Для остальных подсказок, чтобы они убирались к черту
	//podskazka1
	podskazka1.style.opacity = "0";
	podskazka1.style.transition = "0.5s";
	podskazka1Link.style.transition = "0.5s";
	podskazka1Link.style.visibility = "hidden";
	//podskazka2
	podskazka2.style.opacity = "0";
	podskazka2.style.transition = "0.5s";
	podskazka2Link.style.transition = "0.5s";
	podskazka2Link.style.visibility = "hidden";
	//podskazka4
	podskazka4.style.opacity = "0";
	podskazka4.style.transition = "0.5s";
	podskazka4Link.style.transition = "0.5s";
	podskazka4Link.style.visibility = "hidden";
	//Счетчик
	num = 3;
	closeSvetPodskazka3();
}
function leftHeadGirlPinkBag(){ // Функция "leftHeadGirlPinkBag" изменяет css свойста объекта "РУКИ РЫЖЕЙ ДЕВОЧКИ С РОЗОВЫМ ПОРТФЕЛЕМ"
	armOrangeGirlPinkBag.style.transform = "rotate(40deg)";
	setTimeout(midlHeadGirlPinkBag, 1000); //Вызываем функцию "midlHeadGirlPinkBag" один раз через 1000 мс
}
function midlHeadGirlPinkBag(){ //Функция "midlHeadGirlPinkBag" изменяет css свойста объекта "РУКИ РЫЖЕЙ ДЕВОЧКИ С РОЗОВЫМ ПОРТФЕЛЕМ"
	armOrangeGirlPinkBag.style.transform = "rotate(0deg)";
}



orangeGirlPinkBag.onmouseout = function() {
	podskazka3.style.opacity = "1";
	podskazka3.style.transition = "1s";
	podskazka3Link.style.transition = "1s";
	podskazka3Link.style.visibility = "visible";
	//Блок кода для удаления заднего фона при наведении на объект
	armOrangeGirlPinkBag.style.zIndex = "1";
	orangeGirlPinkBag.style.zIndex = "1";
	//podskazka3.style.zIndex = "1";
	background.style.zIndex = "1";
	background.style.opacity = "0";
	background.style.transition = "0.3s";

	//Для остальных подсказок, чтобы они появилиись
	//podskazka1
	podskazka1.style.opacity = "1";
	podskazka1.style.transition = "1s";
	podskazka1Link.style.transition = "1s";
	podskazka1Link.style.visibility = "visible";
	//podskazka2
	podskazka2.style.opacity = "1";
	podskazka2.style.transition = "1s";
	podskazka2Link.style.transition = "1s";
	podskazka2Link.style.visibility = "visible";
	//podskazka4
	podskazka4.style.opacity = "1";
	podskazka4.style.transition = "1s";
	podskazka4Link.style.transition = "1s";
	podskazka4Link.style.visibility = "visible";
	//Счетчик
	num = 0;
	//timePodskazki3();
	podskazka1.style.display = "block";
	podskazka2.style.display = "block";
	podskazka4.style.display = "block";
}





/*----------------------*/


armOrangeGirlPinkBag.onmouseover = function() {  //При наведени курсора на объект "РУКА РЫЖЕЙ ДЕВОЧКИ С РОЗОВЫМ ПОРТФЕЛЕМ" запускается функция, которая изменяет css свойста объекта "РУКИ РЫЖЕЙ ДЕВОЧКИ С РОЗОВЫМ ПОРТФЕЛЕМ"
	//При наведенни на объект "РУКА РЫЖЕЙ ДЕВОЧКИ С РОЗОВЫМ ПОРТФЕЛЕМ" проявляется текстовая подсказка
	podskazka3.style.opacity = "1"; 
	podskazka3.style.transition = "1s";
	podskazka3Link.style.transition = "1s";
	podskazka3Link.style.visibility = "visible";
	//Блок кода для появления заднего фона при наведении на объект
	armOrangeGirlPinkBag.style.zIndex = "3";
	orangeGirlPinkBag.style.zIndex = "3";
	//podskazka3.style.zIndex = "3";
	background.style.zIndex = "2";
	background.style.opacity = "0.4";
	background.style.transition = "0.3s";
	//Блок кода для анимации подобъекта
	armOrangeGirlPinkBag.style.transform = "rotate(-20deg)";
	armOrangeGirlPinkBag.style.transition = "transform 1s";
	orangeGirlPinkBag.style.cursor = "pointer";
	armOrangeGirlPinkBag.style.cursor = "pointer";
	setTimeout(leftHeadGirlPinkBag, 1000); //Вызываем функцию "leftHeadGirlPinkBag" один раз через 1000 мс
	//Для остальных подсказок, чтобы они убирались к черту
	//podskazka1
	podskazka1.style.opacity = "0";
	podskazka1.style.transition = "0.5s";
	podskazka1Link.style.transition = "0.5s";
	podskazka1Link.style.visibility = "hidden";
	//podskazka2
	podskazka2.style.opacity = "0";
	podskazka2.style.transition = "0.5s";
	podskazka2Link.style.transition = "0.5s";
	podskazka2Link.style.visibility = "hidden";
	//podskazka4
	podskazka4.style.opacity = "0";
	podskazka4.style.transition = "0.5s";
	podskazka4Link.style.transition = "0.5s";
	podskazka4Link.style.visibility = "hidden";
	//Счетчик
	num = 3;
	closeSvetPodskazka3();
}
function leftArmHeadGirlPinkBag(){ // Функция "leftArmHeadGirlPinkBag" изменяет css свойста объекта "РУКИ РЫЖЕЙ ДЕВОЧКИ С РОЗОВЫМ ПОРТФЕЛЕМ"
	armOrangeGirlPinkBag.style.transform = "rotate(40deg)";
	setTimeout(midlArmHeadGirlPinkBag, 1000); //Вызываем функцию "midlArmHeadGirlPinkBag" один раз через 1000 мс
}
function midlArmHeadGirlPinkBag(){ //Функция "midlArmHeadGirlPinkBag" изменяет css свойста объекта "РУКИ РЫЖЕЙ ДЕВОЧКИ С РОЗОВЫМ ПОРТФЕЛЕМ"
	armOrangeGirlPinkBag.style.transform = "rotate(0deg)";
}

armOrangeGirlPinkBag.onmouseout = function() {
	podskazka3.style.opacity = "1";
	podskazka3.style.transition = "1s";
	podskazka3Link.style.transition = "1s";
	podskazka3Link.style.visibility = "visible";
	//Блок кода для удаления заднего фона при наведении на объект
	armOrangeGirlPinkBag.style.zIndex = "1";
	orangeGirlPinkBag.style.zIndex = "1";
	//podskazka3.style.zIndex = "1";
	background.style.zIndex = "1";
	background.style.opacity = "0";
	background.style.transition = "0.3s";

	//Для остальных подсказок, чтобы они появилиись
	//podskazka1
	podskazka1.style.opacity = "1";
	podskazka1.style.transition = "1s";
	podskazka1Link.style.transition = "1s";
	podskazka1Link.style.visibility = "visible";
	//podskazka2
	podskazka2.style.opacity = "1";
	podskazka2.style.transition = "1s";
	podskazka2Link.style.transition = "1s";
	podskazka2Link.style.visibility = "visible";
	//podskazka4
	podskazka4.style.opacity = "1";
	podskazka4.style.transition = "1s";
	podskazka4Link.style.transition = "1s";
	podskazka4Link.style.visibility = "visible";
	//Счетчик
	num = 0;
	podskazka1.style.display = "block";
	podskazka2.style.display = "block";
	podskazka4.style.display = "block";
}


/*----------------------*/
//Код для подсказки к объекту
podskazka3Link.onmouseover = function(){
	//Блок кода для появления заднего фона при наведении на объект
	armOrangeGirlPinkBag.style.zIndex = "3";
	orangeGirlPinkBag.style.zIndex = "3";
	//podskazka3.style.zIndex = "3";
	background.style.zIndex = "2";
	background.style.opacity = "0.4";
	background.style.transition = "0.3s";
	//Счетчик
	num = 3;
	closeSvetPodskazka3();
}
podskazka3.onmouseout = function(){
	//Блок кода для удаления заднего фона при наведении на объект
	armOrangeGirlPinkBag.style.zIndex = "1";
	orangeGirlPinkBag.style.zIndex = "1";
	//podskazka3.style.zIndex = "1";
	background.style.zIndex = "1";
	background.style.opacity = "0";
	background.style.transition = "0.3s";
	//Счетчик
	num = 0;
	podskazka1.style.display = "block";
	podskazka2.style.display = "block";
	podskazka4.style.display = "block";
}



/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/




/*Код для мальчика с лупой*/
let bodyBoyLupa = document.getElementById("body-boy-lupa");//Извлекаем обект "ТЕЛО МАЛЬЧИКА С ЛУПОЙ" из DOM
let headBoyLupa = document.getElementById("head-boy-lupa");//Извлекаем обект "ГОЛОВА ТЕЛА МАЛЬЧИКА С ЛУПОЙ" из DOM
let lupaBoy = document.getElementById("lupa-boy");//Извлекаем обект "ЛУПА МАЛЬЧИКА С ЛУПОЙ" из DOM



bodyBoyLupa.onmouseover = function() {  //При наведени курсора на объект "ТЕЛА МАЛЬЧИКА С ЛУПОЙ" запускается функция, которая изменяет css свойста объектов "ГОЛОВА ТЕЛА МАЛЬЧИКА С ЛУПОЙ и ЛУПА МАЛЬЧИКА С ЛУПОЙ"
	//При наведенни на объект "ТЕЛА МАЛЬЧИКА С ЛУПОЙ" проявляется текстовая подсказка
	podskazka4.style.opacity = "1"; 
	podskazka4.style.transition = "1s";
	podskazka4Link.style.transition = "1s";
	podskazka4Link.style.visibility = "visible";
	//Блок кода для появления заднего фона при наведении на объект
	headBoyLupa.style.zIndex = "3";
	bodyBoyLupa.style.zIndex = "3";
	lupaBoy.style.zIndex = "3";
	//podskazka4.style.zIndex = "3";
	background.style.zIndex = "2";
	background.style.opacity = "0.4";
	background.style.transition = "0.3s";
	//Блок кода для анимации подобъекта
	headBoyLupa.style.transform = "rotate(-7deg)";
	headBoyLupa.style.transition = "transform 1.5s";
	bodyBoyLupa.style.cursor = "pointer";
	headBoyLupa.style.cursor = "pointer";
	lupaBoy.style.cursor = "pointer";
	/*Код для лупы*/
	lupaBoy.style.transform = "rotate(7deg)";
	lupaBoy.style.transition = "transform 1s";
	setTimeout(leftBoyLupa, 1500); //Вызываем функцию "leftBoyLupa" один раз через 1000 мс
	//Для остальных подсказок, чтобы они убирались к черту
	//podskazka1
	podskazka1.style.opacity = "0";
	podskazka1.style.transition = "0.5s";
	podskazka1Link.style.transition = "0.5s";
	podskazka1Link.style.visibility = "hidden";
	//podskazka2
	podskazka2.style.opacity = "0";
	podskazka2.style.transition = "0.5s";
	podskazka2Link.style.transition = "0.5s";
	podskazka2Link.style.visibility = "hidden";
	//podskazka3
	podskazka3.style.opacity = "0";
	podskazka3.style.transition = "0.5s";
	podskazka3Link.style.transition = "0.5s";
	podskazka3Link.style.visibility = "hidden";
	//Счетчик
	num = 4;
	closeSvetPodskazka4();
}
function leftBoyLupa(){ // Функция "leftBoyLupa" изменяет css свойста объекта "ГОЛОВА ТЕЛА МАЛЬЧИКА С ЛУПОЙ и ЛУПА МАЛЬЧИКА С ЛУПОЙ"
	headBoyLupa.style.transform = "rotate(10deg)";
	/*Код для лупы*/
	lupaBoy.style.transform = "rotate(0deg)";
	//setTimeout(midlBoyLupa, 1000); //Вызываем функцию "midlBoyLupa" один раз через 1000 мс
}
/*function midlBoyLupa(){ //Функция "midlBoyLupa" изменяет css свойста объекта "ГОЛОВА ТЕЛА МАЛЬЧИКА С ЛУПОЙ и ЛУПА МАЛЬЧИКА"
	headBoyLupa.style.transform = "rotate(2.5deg)";
	headBoyLupa.style.bottom = "76%";
	/*Код для лупы*/  /*
	lupaBoy.style.transform = "rotate(-9deg)";
	lupaBoy.style.bottom = "74%";
}*/



bodyBoyLupa.onmouseout = function() {
	podskazka4.style.opacity = "1";
	podskazka4.style.transition = "1s";
	podskazka4Link.style.transition = "1s";
	podskazka4Link.style.visibility = "visible";
	//Блок кода для удаления заднего фона при наведении на объект
	headBoyLupa.style.zIndex = "1";
	bodyBoyLupa.style.zIndex = "1";
	lupaBoy.style.zIndex = "1";
	//podskazka4.style.zIndex = "1";
	background.style.zIndex = "1";
	background.style.opacity = "0";
	background.style.transition = "0.3s";
	//Для остальных подсказок, чтобы они появилиись
	//podskazka1
	podskazka1.style.opacity = "1";
	podskazka1.style.transition = "1s";
	podskazka1Link.style.transition = "1s";
	podskazka1Link.style.visibility = "visible";
	//podskazka2
	podskazka2.style.opacity = "1";
	podskazka2.style.transition = "1s";
	podskazka2Link.style.transition = "1s";
	podskazka2Link.style.visibility = "visible";
	//podskazka3
	podskazka3.style.opacity = "1";
	podskazka3.style.transition = "1s";
	podskazka3Link.style.transition = "1s";
	podskazka3Link.style.visibility = "visible";
	//Счетчик
	num = 0;
	//timePodskazki4();
	podskazka1.style.display = "block";
	podskazka2.style.display = "block";
	podskazka3.style.display = "block";
}





/*----------------------*/


lupaBoy.onmouseover = function() {  //При наведени курсора на объект "ГОЛОВА ТЕЛА МАЛЬЧИКА С ЛУПОЙ" запускается функция, которая изменяет css свойста объекта "ГОЛОВА ТЕЛА МАЛЬЧИКА С ЛУПОЙ и ЛУПА МАЛЬЧИКА С ЛУПОЙ"
	//При наведенни на объект "ГОЛОВА ТЕЛА МАЛЬЧИКА С ЛУПОЙ" проявляется текстовая подсказка
	podskazka4.style.opacity = "1"; 
	podskazka4.style.transition = "1s";
	podskazka4Link.style.transition = "1s";
	podskazka4Link.style.visibility = "visible";
	//Блок кода для появления заднего фона при наведении на объект
	headBoyLupa.style.zIndex = "3";
	bodyBoyLupa.style.zIndex = "3";
	lupaBoy.style.zIndex = "3";
	//podskazka4.style.zIndex = "3";
	background.style.zIndex = "2";
	background.style.opacity = "0.4";
	background.style.transition = "0.3s";
	//Блок кода для анимации подобъекта
	headBoyLupa.style.transform = "rotate(-7deg)";
	headBoyLupa.style.transition = "transform 1.5s";
	bodyBoyLupa.style.cursor = "pointer";
	headBoyLupa.style.cursor = "pointer";
	lupaBoy.style.cursor = "pointer";
	/*Код для лупы*/
	lupaBoy.style.transform = "rotate(7deg)";
	lupaBoy.style.transition = "transform 1s";
	setTimeout(leftBoyLupa, 1500); //Вызываем функцию "leftBoyLupa" один раз через 1000 мс
	//Для остальных подсказок, чтобы они убирались к черту
	//podskazka1
	podskazka1.style.opacity = "0";
	podskazka1.style.transition = "0.5s";
	podskazka1Link.style.transition = "0.5s";
	podskazka1Link.style.visibility = "hidden";
	//podskazka2
	podskazka2.style.opacity = "0";
	podskazka2.style.transition = "0.5s";
	podskazka2Link.style.transition = "0.5s";
	podskazka2Link.style.visibility = "hidden";
	//podskazka3
	podskazka3.style.opacity = "0";
	podskazka3.style.transition = "0.5s";
	podskazka3Link.style.transition = "0.5s";
	podskazka3Link.style.visibility = "hidden";
	//Счетчик
	num = 4;
	closeSvetPodskazka4();
}
function leftBoyLupa(){ // Функция "leftBoyLupa" изменяет css свойста объекта "ГОЛОВА ТЕЛА МАЛЬЧИКА С ЛУПОЙ и ЛУПА МАЛЬЧИКА С ЛУПОЙ"
	headBoyLupa.style.transform = "rotate(10deg)";
	/*Код для лупы*/
	lupaBoy.style.transform = "rotate(0deg)";
	//setTimeout(midlBoyLupa, 1000); //Вызываем функцию "midlBoyLupa" один раз через 1000 мс
}
/*function midlBoyLupa(){ //Функция "midlBoyLupa" изменяет css свойста объекта "ГОЛОВА ТЕЛА МАЛЬЧИКА С ЛУПОЙ и ЛУПА МАЛЬЧИКА С ЛУПОЙ"
	headBoyLupa.style.transform = "rotate(2.5deg)";
	headBoyLupa.style.bottom = "76%";
	/*Код для лупы*/
/*	lupaBoy.style.transform = "rotate(-9deg)";
	lupaBoy.style.bottom = "74%";
}*/



lupaBoy.onmouseout = function() {
	podskazka4.style.opacity = "1";
	podskazka4.style.transition = "1s";
	podskazka4Link.style.transition = "1s";
	podskazka4Link.style.visibility = "visible";
	//Блок кода для удаления заднего фона при наведении на объект
	headBoyLupa.style.zIndex = "1";
	bodyBoyLupa.style.zIndex = "1";
	lupaBoy.style.zIndex = "1";
	//podskazka4.style.zIndex = "1";
	background.style.zIndex = "1";
	background.style.opacity = "0";
	background.style.transition = "0.3s";
	//Для остальных подсказок, чтобы они появилиись
	//podskazka1
	podskazka1.style.opacity = "1";
	podskazka1.style.transition = "1s";
	podskazka1Link.style.transition = "1s";
	podskazka1Link.style.visibility = "visible";
	//podskazka2
	podskazka2.style.opacity = "1";
	podskazka2.style.transition = "1s";
	podskazka2Link.style.transition = "1s";
	podskazka2Link.style.visibility = "visible";
	//podskazka3
	podskazka3.style.opacity = "1";
	podskazka3.style.transition = "1s";
	podskazka3Link.style.transition = "1s";
	podskazka3Link.style.visibility = "visible";
	//Счетчик
	num = 0;
	//timePodskazki4();
	podskazka1.style.display = "block";
	podskazka2.style.display = "block";
	podskazka3.style.display = "block";
}







/*----------------------*/


headBoyLupa.onmouseover = function() {  //При наведени курсора на объект "ЛУПА МАЛЬЧИКА С ЛУПОЙ" запускается функция, которая изменяет css свойста объекта "ГОЛОВА ТЕЛА МАЛЬЧИКА С ЛУПОЙ и ЛУПА МАЛЬЧИКА С ЛУПОЙ"
	//При наведенни на объект "ЛУПА МАЛЬЧИКА С ЛУПОЙ" проявляется текстовая подсказка
	podskazka4.style.opacity = "1"; 
	podskazka4.style.transition = "1s";
	podskazka4Link.style.transition = "1s";
	podskazka4Link.style.visibility = "visible";
	//Блок кода для появления заднего фона при наведении на объект
	headBoyLupa.style.zIndex = "3";
	bodyBoyLupa.style.zIndex = "3";
	lupaBoy.style.zIndex = "3";
	//podskazka4.style.zIndex = "3";
	background.style.zIndex = "2";
	background.style.opacity = "0.4";
	background.style.transition = "0.3s";
	//Блок кода для анимации подобъекта
	headBoyLupa.style.transform = "rotate(-7deg)";
	headBoyLupa.style.transition = "transform 1.5s";
	bodyBoyLupa.style.cursor = "pointer";
	headBoyLupa.style.cursor = "pointer";
	lupaBoy.style.cursor = "pointer";
	/*Код для лупы*/
	lupaBoy.style.transform = "rotate(7deg)";
	lupaBoy.style.transition = "transform 1s";
	setTimeout(leftBoyLupa, 1500); //Вызываем функцию "leftBoyLupa" один раз через 1000 мс
	//Для остальных подсказок, чтобы они убирались к черту
	//podskazka1
	podskazka1.style.opacity = "0";
	podskazka1.style.transition = "0.5s";
	podskazka1Link.style.transition = "0.5s";
	podskazka1Link.style.visibility = "hidden";
	//podskazka2
	podskazka2.style.opacity = "0";
	podskazka2.style.transition = "0.5s";
	podskazka2Link.style.transition = "0.5s";
	podskazka2Link.style.visibility = "hidden";
	//podskazka3
	podskazka3.style.opacity = "0";
	podskazka3.style.transition = "0.5s";
	podskazka3Link.style.transition = "0.5s";
	podskazka3Link.style.visibility = "hidden";
	//Счетчик
	num = 4;
	closeSvetPodskazka4();
}
function leftBoyLupa(){ // Функция "leftBoyLupa" изменяет css свойста объекта "ГОЛОВА ТЕЛА МАЛЬЧИКА С ЛУПОЙ и ЛУПА МАЛЬЧИКА С ЛУПОЙ"
	headBoyLupa.style.transform = "rotate(10deg)";
	/*Код для лупы*/
	lupaBoy.style.transform = "rotate(0deg)";
	//setTimeout(midlBoyLupa, 1000); //Вызываем функцию "midlBoyLupa" один раз через 1000 мс
}
/*function midlBoyLupa(){ //Функция "midlBoyLupa" изменяет css свойста объекта "ГОЛОВА ТЕЛА МАЛЬЧИКА С ЛУПОЙ и ЛУПА МАЛЬЧИКА С ЛУПОЙ"
	headBoyLupa.style.transform = "rotate(2.5deg)";
	headBoyLupa.style.bottom = "76%";
	/*Код для лупы*/
/*	lupaBoy.style.transform = "rotate(-9deg)";
	lupaBoy.style.bottom = "74%";
}*/


headBoyLupa.onmouseout = function() {
	podskazka4.style.opacity = "1";
	podskazka4.style.transition = "1s";
	podskazka4Link.style.transition = "1s";
	podskazka4Link.style.visibility = "visible";
	//Блок кода для удаления заднего фона при наведении на объект
	headBoyLupa.style.zIndex = "1";
	bodyBoyLupa.style.zIndex = "1";
	lupaBoy.style.zIndex = "1";
	//podskazka4.style.zIndex = "1";
	background.style.zIndex = "1";
	background.style.opacity = "0";
	background.style.transition = "0.3s";
	//Для остальных подсказок, чтобы они появилиись
	//podskazka1
	podskazka1.style.opacity = "1";
	podskazka1.style.transition = "1s";
	podskazka1Link.style.transition = "1s";
	podskazka1Link.style.visibility = "visible";
	//podskazka2
	podskazka2.style.opacity = "1";
	podskazka2.style.transition = "1s";
	podskazka2Link.style.transition = "1s";
	podskazka2Link.style.visibility = "visible";
	//podskazka3
	podskazka3.style.opacity = "1";
	podskazka3.style.transition = "1s";
	podskazka3Link.style.transition = "1s";
	podskazka3Link.style.visibility = "visible";
	//Счетчик
	num = 0;
	podskazka1.style.display = "block";
	podskazka2.style.display = "block";
	podskazka3.style.display = "block";
}

/*----------------------*/
//Код для подсказки к объекту
podskazka4Link.onmouseover = function(){
	//Блок кода для появления заднего фона при наведении на объект
	headBoyLupa.style.zIndex = "3";
	bodyBoyLupa.style.zIndex = "3";
	lupaBoy.style.zIndex = "3";
	//podskazka4.style.zIndex = "3";
	background.style.zIndex = "2";
	background.style.opacity = "0.4";
	background.style.transition = "0.3s";
	//Счетчик
	num = 4;
	closeSvetPodskazka4();
}
podskazka4.onmouseout = function(){
	//Блок кода для удаления заднего фона при наведении на объект
	headBoyLupa.style.zIndex = "1";
	bodyBoyLupa.style.zIndex = "1";
	lupaBoy.style.zIndex = "1";
	//podskazka4.style.zIndex = "1";
	background.style.zIndex = "1";
	background.style.opacity = "0";
	background.style.transition = "0.3s";
	//Счетчик
	num = 0;
	podskazka1.style.display = "block";
	podskazka2.style.display = "block";
	podskazka3.style.display = "block";
}












/*!!!!!!!!!!!!!!!!!!!!!!!!!*/
/*Ниже представлен код для блоков текстов-подсказок*/

/*Ниже блок кода для двух объектов текстов-подсказок "podskazka1 И podskazka2"*/


/*Ниже представлен код для блокА текст-подсказка "РАССКАЖУ-ТЕБЕ-О-НОВЫХ-СОБЫТИЯХ"*/





let start1 = setTimeout(timePodskazki1, 5500);//Инициализирует функцию "timePodskazka1"
clearTimeout(start1);
timePodskazki2();//Инициализирует функцию "timePodskazka2"
let start3 = setTimeout(timePodskazki3, 6000);//Инициализирует функцию "timePodskazka1"
clearTimeout(start3);
timePodskazki4();//Инициализирует функцию "timePodskazka4"

function timePodskazki1() {
	podskazka1.style.display = "block";
	setTimeout(closeSvetPodskazka1, 1000);

}

function closeSvetPodskazka1() {//Функция, которая инициализирует медленное исчезновение объекта "podskazka1"
	if (num == 1){
		podskazka2.style.display = "none";
		podskazka3.style.display = "none";
		podskazka4.style.display = "none";
		return 0;
	} else{
		podskazka1.style.opacity = "0";
		podskazka1.style.transition = "0.3s";
		podskazka1Link.style.transition = "1s";
		podskazka1Link.style.visibility = "hidden";	
		
		setTimeout(openSvetPodskazka1, 2000);//С задержкой в 6сек инициализирует функцию "openSvetPodskazka1"


			//setTimeout(closeSvetPodskazka2, 8000);//С задержкой в 6сек инициализирует функцию "closeSvetPodskazka2", которая инициализирует медленное исчезновение объекта "podskazka2"
	}
	
	}
	function openSvetPodskazka1(){//Функция, которая инициализирует медленное появление объекта "podskazka1"
			podskazka1.style.opacity = "1";
			podskazka1.style.transition = "0.3s";
			podskazka1Link.style.transition = "1s";
			podskazka1Link.style.visibility = "visible";	
			setTimeout(closeSvetPodskazka1, 8000);//С задержкой в 10сек инициализирует функцию "closeSvetPodskazka1" тем самым запускает бесконечный цикл вызовов функций, которая одна из них вложенна в другую. Или Рекурсию
}






function timePodskazki2() {
	podskazka2.style.display = "block";
		setTimeout(closeSvetPodskazka2, 2000);
}

function closeSvetPodskazka2() {//Функция, которая инициализирует медленное исчезновение объекта "podskazka1"
	if (num == 2){
		podskazka1.style.display = "none";
		podskazka3.style.display = "none";
		podskazka4.style.display = "none";
		return 0;
	} 
	else {
		podskazka2.style.opacity = "0";
		podskazka2.style.transition = "0.3s";
		podskazka2Link.style.transition = "1s";
		podskazka2Link.style.visibility = "hidden";	
		setTimeout(openSvetPodskazka2, 3000);//С задержкой в 6сек инициализирует функцию "openSvetPodskazka1"

			
			//setTimeout(closeSvetPodskazka2, 8000);//С задержкой в 6сек инициализирует функцию "closeSvetPodskazka2", которая инициализирует медленное исчезновение объекта "podskazka2"
	}
	
	}
	function openSvetPodskazka2(){//Функция, которая инициализирует медленное появление объекта "podskazka1"
			podskazka2.style.opacity = "1";
			podskazka2.style.transition = "0.3s";
			podskazka2Link.style.transition = "1s";
			podskazka2Link.style.visibility = "visible";	
			setTimeout(closeSvetPodskazka2, 7000);//С задержкой в 10сек инициализирует функцию "closeSvetPodskazka1" тем самым запускает бесконечный цикл вызовов функций, которая одна из них вложенна в другую. Или Рекурсию
}





function timePodskazki3() {
	podskazka3.style.display = "block";
	setTimeout(closeSvetPodskazka3, 1000);
}


function closeSvetPodskazka3() {//Функция, которая инициализирует медленное исчезновение объекта "podskazka3"
	if (num == 3){
		podskazka1.style.display = "none";
		podskazka2.style.display = "none";
		podskazka4.style.display = "none";
		return 0;
	} 
	else {
		//podskazka3.style.display = "block";
		podskazka3.style.opacity = "0";
		podskazka3.style.transition = "0.3s";
		podskazka3Link.style.transition = "1s";
		podskazka3Link.style.visibility = "hidden";	
		setTimeout(openSvetPodskazka3, 4000);//С задержкой в 6сек инициализирует функцию "openSvetPodskazka1"

			
			//setTimeout(closeSvetPodskazka2, 8000);//С задержкой в 6сек инициализирует функцию "closeSvetPodskazka2", которая инициализирует медленное исчезновение объекта "podskazka2"
	}
}
function openSvetPodskazka3(){//Функция, которая инициализирует медленное появление объекта "podskazka1"
			podskazka3.style.opacity = "1";
			podskazka3.style.transition = "0.3s";
			podskazka3Link.style.transition = "1s";
			podskazka3Link.style.visibility = "visible";	
			setTimeout(closeSvetPodskazka3, 7000);//С задержкой в 10сек инициализирует функцию "closeSvetPodskazka1" тем самым запускает бесконечный цикл вызовов функций, которая одна из них вложенна в другую. Или Рекурсию
}





function timePodskazki4() {
	podskazka4.style.display = "block";
	setTimeout(closeSvetPodskazka4, 2000);
}

function closeSvetPodskazka4() {//Функция, которая инициализирует медленное исчезновение объекта "podskazka4"
	if (num == 4){
		podskazka1.style.display = "none";
		podskazka2.style.display = "none";
		podskazka3.style.display = "none";
		return 0;
	}
	else {
		//podskazka4.style.display = "block";
		podskazka4.style.opacity = "0";
		podskazka4.style.transition = "0.3s";
		podskazka4Link.style.transition = "1s";
		podskazka4Link.style.visibility = "hidden";	
		setTimeout(openSvetPodskazka4, 5000);//С задержкой в 6сек инициализирует функцию "openSvetPodskazka1"

			
			//setTimeout(closeSvetPodskazka2, 8000);//С задержкой в 6сек инициализирует функцию "closeSvetPodskazka2", которая инициализирует медленное исчезновение объекта "podskazka2"
	}
	} 
	function openSvetPodskazka4(){//Функция, которая инициализирует медленное появление объекта "podskazka1"
			podskazka4.style.opacity = "1";
			podskazka4.style.transition = "0.3s";
			podskazka4Link.style.transition = "1s";
			podskazka4Link.style.visibility = "visible";	
			setTimeout(closeSvetPodskazka4, 7000);//С задержкой в 10сек инициализирует функцию "closeSvetPodskazka1" тем самым запускает бесконечный цикл вызовов функций, которая одна из них вложенна в другую. Или Рекурсию
}




/*Эксеперимент с подсказками*/



/*bodyBlond.onmouseover = function(){
	podskazka1.style.opacity = "1";
	podskazka1.style.transition = "1s";
	podskazka1Link.style.transition = "1s";
	podskazka1Link.style.visibility = "visible";
}*/

/*headBlond.onmouseover = function(){
	
	podskazka1.style.opacity = "1";
	podskazka1.style.transition = "1s";
	podskazka1Link.style.transition = "1s";
	podskazka1Link.style.visibility = "visible";
}*/




/*bodyBlond.onmouseout = function(){
	podskazka1.style.opacity = "0";
	podskazka1.style.transition = "1s";
	podskazka1Link.style.transition = "1s";
	podskazka1Link.style.visibility = "hidden";
}*/


/*headBlond.onmouseout = function(){
	podskazka1.style.opacity = "0";
	podskazka1.style.transition = "1s";
	podskazka1Link.style.transition = "1s";
	podskazka1Link.style.visibility = "hidden";
}*/
















//Код для слайдера!!!
$(document).ready(function(){
  $('.slider').slick({
  	arrows:true, //Наличие стрелочек (кнопок переключения)
  	dots:true, //Точки
  	adaptiveHeight:true, //Автоматически настраивает высоту слайдера под высоту картинки
  	slidesToShow:1, //Количесвто слайдов, которые отображаются за раз
  	slidesToScroll:1,  //Количесвто слайдов, которые пролистываются за раз
  	speed:1000, //Скорость смены слайдов в мс
  	infinite:true, //Будет ли слайдер бесконечный
  	initialSlide:0, //Стартовый слайд (его позиция в массиве)
  	autoplay:true, //Автопроигрывание слайда
  	autoplaySpeed:5000, //Скорость автопроигрывания слайдов
  	//Три дополнительных свойства к autoplay
  	pauseOnFocus:true, //Автопроигрывание останавливается при клике мышки на слайд
  	pauseOnHover:false, //Автопроигрывание останавливается при наведении курсора на слайд
  	pauseOnDotsHover:true, //Автопроигрывание останавливается при наведении курсора на точки слайда
  	draggable:true, //Отвечает за пролистывание слайдов курсором при зажатой кнопке мыши на ПК
  	swipe:true, //Отвечает за пролистывание слайдов курсором при зажатой кнопке мыши на ТАЧСКРИНАХ (телефоны, планшеты)
  	waitForAnimate:true, //Перелистывание слайдов возможно только при завершении анимации
  	
  });
});





//Код для меню-бургера!!!
$(document).ready(function(){
  $('.navigation__btn').click(function(event) {
  	$('.navigation__burg').toggleClass('fa-times-circle');
  		$('.navigation__menu').toggleClass('active');
  });
});



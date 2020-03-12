/*Обработчик события объекта c id "menu" из DOM 
при клике на него вызывается функция onClick, в котором
при определенном условии изменяется имя класса объекта DOM и
тут в игру ступает CSS для данного класса*/
menu.onclick = function onClick() {
	let x = document.getElementById("myTopnav");

	if(x.className === "topnav"){
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
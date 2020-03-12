$(function() { //создаем функцию
	$('.buttons button').click(function(){ //Обращаемся к классу toggles, в частности к кнопкам и будем отслеживать событие клик. После клика создаем функцию 
		let get_id = this.id; //Создаем переменную в которую помещаем с помощью ключевого слова this индентификатор определенной кнопки
		let get_current = $('.blocks_slide .' + get_id); //Создаем переменную в которой будет определяться определенная картинка с классом в блоке класса .posts
	
		$('.slide').not(get_current).hide(500); //Скрываем элменты, котрые нам не нужны. Т.е. в блоке post, кроме тех кто не попали в переменную get_current скрываем их с помощью метода hide с задержкой в 500 милисекунд
		get_current.show(500); //Показываем картинки, которые оказались в переменной get_current с задержкой в 500 милисекунд 
	}); 

	$('#all').click(function(){ //Берем кнопку с индификатором #showAll и отслеживаем событие click, если оно произошло, то вызываем функцию
		$('.slide').show(500); //все элементы с классом post показываем с помощью функции show с задержкой в 500 милисекунд
	});
});



//Используем JavaScrip как обрабочик событий, так как необходимо реализовать текст с красной звездочкой в форме (Данное решение мне кажется не совсем корректным)

let name_form = document.getElementById("name_form");
let name_text = document.getElementById("name_text");

name_form.onclick = function() {
	name_text.style.display = "none";
}


let email_form = document.getElementById("email_form");
let email_text = document.getElementById("email_text");

email_form.onclick = function() {
	email_text.style.display = "none";
}


let textarea_form = document.getElementById("textarea_form");
let textarea_text = document.getElementById("textarea_text");

textarea_form.onclick = function() {
	textarea_text.style.display = "none";
}
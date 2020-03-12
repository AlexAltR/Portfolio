/*Обращаемся к элементам с определенным id в DOM и получаем 
на него ссылку. Затем мы берем ссылку на объект, в JS это 
и есть объект и назначаем функцию свойству onmouseover(навел мышку)
 и onmouseout(отвел мышку)*/

let stepbl1 = document.getElementById("stepbl1");
let stepbrdr1 = document.getElementById("stepbrdr1")

let stepbl2 = document.getElementById("stepbl2");
let stepbrdr2 = document.getElementById("stepbrdr2")


let stepbl3 = document.getElementById("stepbl3");
let stepbrdr3 = document.getElementById("stepbrdr3")


let strong = document.getElementById("strong");


strong.onmouseover = function() {
	stepbl1.style.backgroundImage = "url(img/star-wars.png)";
	stepbl2.style.backgroundImage = "url(img/star-wars.png)";
	stepbl3.style.backgroundImage = "url(img/star-wars.png)";


}
strong.onmouseout = function() {
	stepbl1.style.backgroundImage = "none";
	stepbl2.style.backgroundImage = "none";
	stepbl3.style.backgroundImage = "none";
}





/*В назначенных функциях мы изменяем свойство объекта на который
ссылаемся из DOM*/




stepbl1.onmouseover = function() {
	stepbrdr1.style.borderBottom = "3px solid white";
}
stepbl1.onmouseout = function() {
	stepbrdr1.style.borderBottom = "3px solid black";
}


stepbl2.onmouseover = function() {
	stepbrdr2.style.borderBottom = "3px solid white";
}
stepbl2.onmouseout = function() {
	stepbrdr2.style.borderBottom = "3px solid black";
}


stepbl3.onmouseover = function() {
	stepbrdr3.style.borderBottom = "3px solid white";
}
stepbl3.onmouseout = function() {
	stepbrdr3.style.borderBottom = "3px solid black";
}


// Функция для "домика" для скролла в самый вверх страницы
function up() {
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, ((top + 100) / -40));
        t = setTimeout('up()', 20);
    } else clearTimeout(t);
    return false;
}

//Функция jQuery для компьютерной мышки, для медленного скролинга на следующий блок
$(document).ready(function () {
    $("#mouse-comp").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        top = top - 50;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});
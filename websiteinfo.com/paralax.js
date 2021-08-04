let parallex = document.getElementById("bg");
let bgimg = document.getElementById("bgimg");
parallex.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bgimg.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)"; //50 - начальный множитель
});


// jQuery("#banner").mousemove(
//     function (e) {
//         var offset = jQuery(this).offset();
//         var xPos = e.pageX - offset.left;
//         var yPos = e.pageY - offset.top;
//         var mouseXPercent = Math.round(xPos / jQuery(this).width() * 100);
//         var mouseYPercent = Math.round(yPos / jQuery(this).height() * 100);
//         jQuery(this).children('img').each(
//             function () {
//                 var diffX = jQuery(window).width() - jQuery(this).width();
//                 var diffY = jQuery(window).height() - jQuery(this).height();
//                 var myX = diffX * (mouseXPercent / 1920);
//                 var myY = diffY * (mouseYPercent / 1080);
//                 var cssObj = {
//                     'left': myX + 'px',
//                     'top': myY + 'px'
//                 }
//                 jQuery(this).animate({ left: myX, top: myY }, { duration: 50, queue: false, easing: 'linear' });
//             }
//         );
//     }
// );

// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene, {
//     pointerEvents: true,
//     relativeInput: true,
//     invertX: true,
//     invertY: true,
// });
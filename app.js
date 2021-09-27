//siddeBar-menu
function openMenu() {
    document.getElementById("leftMenu").style.display = "block";
}

function closeMenu() {
    document.getElementById("leftMenu").style.display = "none";
}

let close1 = document.getElementById("top")
let onscoll1 = document.getElementById("onscroll-Event");
let onscoll2 = document.getElementById("onscroll-Event2");
function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        onscoll1.style.position = "fixed";
        onscoll1.style.marginTop = 0;
        onscoll1.style.zIndex = 100;
        onscoll1.style.backgroundColor="#fff"
        onscoll1.style.borderBottom="1px solid #b1b1b1"

        close1.style.display = "none";

        onscoll2.style.position = "fixed";
        onscoll2.style.marginTop = 0;
        onscoll2.style.zIndex = 100;
        onscoll2.style.backgroundColor="#fff"
        onscoll2.style.borderBottom="1px solid #b1b1b1"
    } else {
        close1.style.display = "block";
        onscoll1.style.position = "";
        onscoll2.style.position = "";

    }
}
window.onscroll = function () {
    myFunction()
};




//CodePen Home Back to Top Button

var btnBack = $('#item__btn-back');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btnBack.addClass('show');
  } else {
    btnBack.removeClass('show');
  }
});

btnBack.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});






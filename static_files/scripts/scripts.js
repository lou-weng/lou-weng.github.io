$(document).ready(function () {
    ScrollReveal().reveal('.home', { duration: 2000, interval: 500 })
    ScrollReveal().reveal('.navigation', { duration: 3000, interval: 500 })
    ScrollReveal().reveal('.about', { duration: 3000, interval: 500 })
    ScrollReveal().reveal('.blog', { duration: 2000, interval: 250 })
    ScrollReveal().reveal('.journey', { duration: 3000, interval: 250 })
    ScrollReveal().reveal('.interests', { duration: 3000, interval: 500 })
})

$(window).scroll(function () {
    if ($(window).scrollTop() >= $(window).height()) {
        $('.navbar').css('background', 'var(--main-color)');
    } else {
        $('.navbar').css('background', 'transparent');
    }
});

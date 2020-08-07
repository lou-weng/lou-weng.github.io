function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    if ($(window).width() > 800) {
        document.getElementById("main").style.marginLeft = "250px";
    }
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    if ($(window).width() > 800) {
        document.getElementById("main").style.marginLeft = "0";
    }
} 
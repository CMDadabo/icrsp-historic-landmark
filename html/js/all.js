window.onload = function () {

    var navCollapse = document.getElementById( "nav-collapse" );
    var navigation = document.getElementById( "navigation" );
    var navIcon = document.getElementById( "nav-icon" );

    navCollapse.addEventListener( "click", function ()
    {
        navigation.classList.toggle( "show" );
        navIcon.classList.toggle( "active" );
    } );
};

window.onload=function(){var e=document.getElementById("nav-collapse"),n=document.getElementById("navigation"),t=document.getElementById("nav-icon");e.addEventListener("click",function(){n.classList.toggle("show"),t.classList.toggle("active")})};
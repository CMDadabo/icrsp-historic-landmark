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

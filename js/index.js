jQuery(document).ready( $ =>  {
    $('.menu-principal').slicknav({
        label: ''
    });

});


window.onscroll = () => {
    const scroll = window.scrollY;

    
    const headerNav = document.querySelector('.barra-navegacion');
    const documentBody = document.querySelector('header');

    // si la cantidad de escroll es mayor a, agregar una clase
    if(scroll > 300) {
        headerNav.classList.add('fixed-top');
        documentBody.classList.add('ft-activo');
    } else {
        documentBody.classList.remove('ft-activo');
        headerNav.classList.remove('fixed-top');
    }
}

$("#switch").click(function () {
    if ($("#fullpage").hasClass("night")) {
        $("#fullpage").removeClass("night");
        $("#switch").removeClass("switched");
    }
    else {
        $("#fullpage").addClass("night");
        $("#switch").addClass("switched");

    }
});
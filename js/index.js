jQuery(document).ready( $ =>  {
    $('.menu-principal').slicknav({
        label: '',
        closeOnClick:true
    });
    $("a").on('click', function(event){
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

});


window.onscroll = () => {
    const scroll = window.scrollY;

    
    const headerNav = document.querySelector('.barra-navegacion');
    const slickNav = document.querySelector('.slicknav_menu');
    const documentBody = document.querySelector('body');

    // si la cantidad de escroll es mayor a, agregar una clase
    if(scroll > 300) {
        headerNav.classList.add('fixed-top');
        slickNav.classList.add('fixed-top');
        documentBody.classList.add('ft-activo');
    } else {
        documentBody.classList.remove('ft-activo');
        slickNav.classList.remove('fixed-top');
        headerNav.classList.remove('fixed-top');
    }
}

$("#switch").click(function () {
    if ($("#fullpage").hasClass("night")) {
        $("#fullpage").removeClass("night");
        $("#switch").removeClass("switched");
        document.getElementById("modo").innerHTML = "Cambiar a modo noche";
    }
    else {
        $("#fullpage").addClass("night");
        $("#switch").addClass("switched");
        document.getElementById("modo").innerHTML = "Cambiar a modo día";

    }
});
$(document).ready(function() {
    $(window).scroll(function() {
        // Verifique se os botões de redes sociais atingiram o canto da tela
        var scrollPosition = $(window).scrollTop() + $(window).height();
        var socialContainerBottom = $('.social-container').offset().top + $('.social-container').outerHeight();
        
        // Se os botões de redes sociais atingirem o canto da tela, adicione uma classe "break" para quebrá-los
        if (scrollPosition >= socialContainerBottom) {
            $('.social-container').addClass('break');
        } else {
            $('.social-container').removeClass('break');
        }
    });
});

$(function() {
    $('li').first().addClass('active');
    $('li').on('click', function() {
        $('.active').removeClass('active').addClass('old');
        $('.old').next().addClass('active');

        if ($('.old').is(':last-child')) {
            $('.old').prev().addClass('active');
        } else {
            $('.old').next().addClass('active');
        }

        $('.old').removeClass('old');
    });
});
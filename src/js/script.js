$(document).ready(function() {
    $('.feed-form').validate({
        rules: {
            name: "required",
            phone: "required"
        },
        messages: {
            name: "Пожалуйста, введите Ваше имя",
            phone: "Пожалуйста, введите Ваш номер"
        }
    });

    $('input[name=phone]').mask("+7 (999) 999-99-99");
});
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
});
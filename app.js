$(document).ready(function() {
    $('button').on('click', fizzbuzz);  
});


function fizzbuzz() {
    for (var i = 1; i <= 100; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            $('.fizzbuzz').append('<div>"fizzbuzz"</div>');
        }
        else if (i % 3 == 0) {
            $('.fizzbuzz').append('<div>"fizz"</div>');
        }
        else if (i % 5 == 0) {
            $('.fizzbuzz').append('<div>"buzz"</div>');
        }
        else {
            $('.fizzbuzz').append('<div>' + i + '</div>');
        }
    }
}


    
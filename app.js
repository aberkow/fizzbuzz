$(document).ready(function() {
    $('button').on('click', fizzbuzz);  
});


function fizzbuzz() {
    for (var i = 1; i <= 100; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            $('.fizzbuzz').append('fizzbuzz ' + '\r');
        }
        else if (i % 3 == 0) {
            $('.fizzbuzz').append('fizz ' + '\r');
        }
        else if (i % 5 == 0) {
            $('.fizzbuzz').append('buzz ' + '\r');
        }
        else {
            $('.fizzbuzz').append(i + ' \r');
        }
    }
}


    
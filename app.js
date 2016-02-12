$(document).ready(function() {
    console.log('hello');
    
    $('button').on('click', fizzbuzz);
    
});


function fizzbuzz() {
    for (var i = 1; i <= 100; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            $('body').append('fizzbuzz' + '\r');
        }
        else if (i % 3 == 0) {
            $('body').append('fizz' + '\r');
        }
        else if (i % 5 == 0) {
            $('body').append('buzz' + '\r');
        }
        else {
            $('body').append(i + '\r');
        }
    }
}


    
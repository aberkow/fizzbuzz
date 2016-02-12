var userNumber;

$(document).ready(function() {
    $('#user_input').change(function() {
        debugger;
        var numberAsString = $('.number').val();
        userNumber = parseInt(numberAsString, 10);
    });
    
    $('#form').submit(function(evt) {
        fizzbuzz(userNumber); //do fizzbuzz on userNumber
        evt.preventDefault();
    });
});

function fizzbuzz(input) {
    
    if (input == NaN) { //check to see if the input is NaN and alert
        alert('Please enter a number.'); 
    }
    else { //play fizzbuzz until reaching the input number
        for (var i = 1; i <= input; i++) {
   
            if ((i % 3 == 0) && (i % 5 == 0)) {
                $('.fizzbuzz').append('<div>"fizzbuzz"</div>');
                console.log('fizzbuzz');
                }
            else if (i % 3 == 0) {
                $('.fizzbuzz').append('<div>"fizz"</div>');
                console.log('fizz');
                }
            else if (i % 5 == 0) {
                $('.fizzbuzz').append('<div>"buzz"</div>');
                console.log('buzz');
                }
            else {
                $('.fizzbuzz').append('<div>' + i + '</div>')
                console.log(i);
            }
            
        }
        
    }   
}


    


    
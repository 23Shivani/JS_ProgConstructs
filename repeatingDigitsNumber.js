let digitsarray = new Array();
//To find reverse of the number
function repeatingDigits(n) {

    let rev = 0;
    for (let i = n; Math.trunc(i) > 0; i /= 10) {
        rev = ((rev * 10) + (Math.trunc(i) % 10));

    }
    return (n == rev);
}

let array = [];
// Prints Repeated Digits number between  given range
function countrepeatingdigitsNumber(min, max) {
    for (var i = min; i <= max; i++) {
        if (repeatingDigits(i)) {
            console.log(i);
        }
    }
}

countrepeatingdigitsNumber(10, 100);
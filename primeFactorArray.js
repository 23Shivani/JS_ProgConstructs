let numb = 15;
let factorsArray = new Array();
console.log("Factors of the Given Number: ");

//To check for prime factors of a number
function primeFactors(numb) {
    for (let i = 2; i <= numb; i++) {

        while (numb % i == 0) {
            factorsArray.push(i);
            numb /= i;
        }
    }
    return factorsArray;
}

console.log(primeFactors(numb).join(' , '));
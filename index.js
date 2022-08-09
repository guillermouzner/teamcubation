/*
 * Si el numero termina en cero, retornar zero
 * Si el numero termina en cinco, retornar five
 * Si el numero es divisible por dos y no termina en cero, retornar even
 * Si el numero no es divisible por dos, retornar odd
 */
function number_cardinality(n) {
    if (!isNaN(n)) {
        let number = n.toString();
        if (number.endsWith("0")) {
            return "zero";
        }
        if (number.endsWith("5")) {
            return "five";
        }
        if (n % 2 === 0 && !number.endsWith("0")) {
            return "even";
        }

        if (n % 2 != 0) {
            return "odd";
        }
    } else {
        return "You must passing a number";
    }
}
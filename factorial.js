
let factorial = 1;
for (i = 5; i >= 1; i--) {
    factorial = factorial * i;
}
console.log(factorial);




/////using recursive function
function factorial2(num) {
    if (num == 1) {
        return 1;
    }
    return num * factorial2(num - 1);
}
let result = factorial2(5);
console.log('step 2', result);
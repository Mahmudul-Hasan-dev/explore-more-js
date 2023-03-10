function sum(num) {
    if (num == 1) {
        return 1;
    }
    return num + sum(num - 1);
}
const total = sum(6);
console.log(total);
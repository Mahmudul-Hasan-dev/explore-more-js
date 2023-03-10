function sum(num) {
    if (num == 1) {
        return 1;
    }
    return num + sum(num - 1);//here function is called internally until it call off by condition 
}
const total = sum(6);
console.log(total);
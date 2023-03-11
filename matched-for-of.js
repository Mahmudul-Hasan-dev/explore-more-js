const numbers = [12, 14, 56, 675, 32, 34];

//for of use 
//we can access every element using for of  loop
//structure :: for(variable of arrayName)
//use meaningful variable in for of to understand easily
for (const number of numbers) {
    console.log(number);
}

const products = [
    { id: 1, name: 'samsung', price: 200000 },
    { id: 2, name: 'apple', price: 220000 },
    { id: 3, name: 'oppo', price: 24000 },
    { id: 4, name: 'lenovo', price: 25000 },
    { id: 5, name: 'nokia', price: 21000 },
    { id: 6, name: 'LG', price: 26000 }
]
for (const product of products) {
    console.log(product);
}
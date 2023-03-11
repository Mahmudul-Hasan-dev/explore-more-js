const products = [
    { id: 1, name: 'samsung phone', price: 200000 },
    { id: 2, name: 'apple', price: 220000 },
    { id: 3, name: 'oppo phone', price: 24000 },
    { id: 4, name: 'lenovo laptop', price: 25000 },
    { id: 5, name: 'nokia phone', price: 21000 },
    { id: 6, name: 'LG laptop', price: 26000 }
]
// for (const product of products) {
//     // console.log(product);

//     //to show the name property from array object
//     // console.log(product.name);

//     //check access protocol
//     console.log(product.name.includes('phone'));

//     //condition can be used here to search
//     console.log(product.name.includes('phone'));
// }


//if we want to return multiple things from function::::::::::::::::::::::::::::::::::::::::::::::::

// function matchedItem(products, search) {
//     let matched = [];
//     let phoneName = [];

//     for (const product of products) {
//         if (product.name.includes(search)) {
//             matched.push(product);
//             phoneName.push(product.name);
//         }
//     }
//     let output = console.log(matched, phoneName);
//     return output;
// }



function matchedItem(products, search) {
    let matched = [];

    for (const product of products) {
        if (product.name.includes(search)) {
            matched.push(product);
        }
    }
    return matched;
}

let searchItem = 'phone';
const result = matchedItem(products, searchItem);
console.log(result);
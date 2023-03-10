const student = {
    name: 'nahid',
    number: '12345678',
    address: 'dhaka',
    isSingle: true,
    //we can take an array as property of an object
    friends: ['rahim', 'karim', 'jalil', 'abul', 'kabul'],

    //we can also take object in array of an object property
    movies: [{ name: 1, made: 2021 }, { name: 2, made: 2016 }],

    //even we can make function in an object property
    act: function () {
        console.log('done act')
    },

    //we can take an object as a property of an object
    car: {
        brand: 'marcedez',
        model: 'sls',
        year: '2025',
        price: 22220000,
        manufacturer: {
            name: 'elon musk',
            country: 'usa',
            description: {
                position: 'CEO',
                salary: 222222
            }
        }
    }
}
console.log(student);
//we can access the property by simply using objectName dot(.)property name
console.log(student.friends);
console.log(student.car);
console.log(student.car.brand);
console.log(student.car.manufacturer.description);

//call an object from array of an object property
console.log(student.movies[1])

//how to call function from a property of object
console.log(student.act);
student.act();
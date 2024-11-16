// zadanie 1 
const originalArray = [5, 10, 15, 20, 25];
const newArray = originalArray.map(num => num + 3);

console.log(newArray);

// zadanie 2
const words = ['Aplle', 'Banana', 'cherry', 'date'];
const lengths = words.map(word => word.length);

console.log(lengths);

// zadanie 3
const products = [

    { name: "laptop", price: 1000 },
    { name: "phone", price: 600 },
    { name: "tablet", price: 450 }
];
 const discountedProducts = products.map(product =>{
    return {
        name:product.name,
        price:(product.price *0.8).toFixed(2)
    };
 });

 console.log(discountedProducts);

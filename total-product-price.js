const products = [
    {
        name:'laptop',
        price:50000,
    },
    {
        name:'Shirt',
        price:500,
    },
    {
        name:'watch',
        price:520,
    },
    {
        name:'risband',
        price:320,
    },
    {
        name:'headphone',
        price:2000,
    },
    {
        name:'microphone',
        price:1000,
    }
];
let productsTotal = 0;
for(const product of products){
    productsTotal += product.price
}
// console.log(productsTotal);
// cart total
const cart = [
    {
        name:'laptop',
        price: 50000,
        quantity: 1
    },
    {
        name:'Shirt',
        price:500,
        quantity: 10
    },
    {
        name:'watch',
        price:520,
        quantity: 5
    },
    {
        name:'risband',
        price:320,
        quantity: 10
    },
    {
        name:'headphone',
        price:2000,
        quantity: 1
    },
    {
        name:'microphone',
        price:1000,
        quantity: 1
    }
];
let cartTotal = 0;
for(const product of cart){
    const productTotal = product.price* product.quantity;
    cartTotal += productTotal;
}
console.log(cartTotal);
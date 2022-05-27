const products = [
    {name:" Samsung s4 phone" , price: 59990},
    {name:"Symphony old phone " , price: 3450},
    {name:"Basundhar bindign papers " , price: 90},
    {name:" Hand Watch" , price:530},
    {name:" Bata Sponge" , price: 350},
    {name:" Redmi 9" , price:34500},
];
// for(const product of products){
//     // console.log(product);
//     if(product.price < 500){
//         break;
//     }
//     console.log(product);
// }
for(const product of products){
    if(product.price < 3000){
        continue;
    }
    console.log(product);
}
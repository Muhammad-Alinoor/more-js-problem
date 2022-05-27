const products = [
    {name:'Symphony button phone',price:1100},
    {name:'Gel pen',price:350},
    {name:'5 liter oil',price:899},
    {name:'fresh rice',price:200},
    {name:'Winster phone',price:900},
    {name:'Ball point pen',price:30},
    {name:'Techno W3 pro smart phone',price:5000},
    {name:'Boiled rice',price:150},
    {name:'Head phone',price:2000},
];
function searchProducts(products,searchText){
    // console.log(products,searchText);
    let matchedProducts = [];
    for(const product of products){
        const productName =product.name;
        if(productName.indexOf(searchText) != -1){
            matchedProducts.push(product);
        }
    }
    return matchedProducts;
};
const matchedProducts = searchProducts(products,'Phone');
console.log(matchedProducts);
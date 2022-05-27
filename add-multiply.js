function addMultiply(num1,num2){
    const add = num1 + num2;
    const product = num1 * num2;
    return [add,product];
}
[add,product]= addMultiply(12,13);
console.log(add);
console.log(product)

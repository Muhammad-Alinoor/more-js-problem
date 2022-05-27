const names = ['abul','sabul','robul','dabul','abul','jarul','sabul','abul','dabul'];

function removeDuplicates(names){
    const unique = [];
    // for(let i = 0; i < names.length; i++){
    //     const element = names[i];
    //     console.log(element);
    // }
    for(const element of names){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
console.log(removeDuplicates(names));
// remove duplicate numbers
const numbers = [34,3423,4325,4543,654,2,24,24,4,54,256343,222222354.324,34,34,34,543,2565,456,453,34,34,34,24];
function removeDuplicateNumbers(numbers){
    const uniqueNumbers = [];
    for(const number of numbers){
        if(uniqueNumbers.indexOf(number) == -1){
            uniqueNumbers.push(number);
        }
    }
    return uniqueNumbers;
}
const uniqueArray=removeDuplicateNumbers(numbers);
console.log(uniqueArray);
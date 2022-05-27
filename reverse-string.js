const myString = 'Hello,my name is ...';
function reverseMyString(string){
    let reverse = '';
    for(const character of string){
        reverse = character + reverse;
    }
    return reverse;
}
const reversed = reverseMyString(myString);
console.log(reversed);
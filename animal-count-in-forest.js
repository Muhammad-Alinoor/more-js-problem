/*
10 animal/mile in first 10 mile
50 animal/mile in 2nd 20 miles
100 animal/ mile after 20 miles
if we go to n miles , how many animals will you see?
*/
function animalCounting (miles){
    if( miles <= 10){
        totalCount = 10 * miles;
        return totalCount;
    }
    else if(miles <= 20 ){
        totalCount = 10*10 + 50 * (miles-10);
    return totalCount;
    }
    else{
        totalCount = 10 *10 + 50 *10 + 100* (miles -20) ;
        return totalCount;
    }

}
const animals = animalCounting(35);
console.log(animals);
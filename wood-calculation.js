// if chairWood = 3cft/chair
    // tableWood = 10 cft/table
    // bedWood = 50 cft/bed
// then calculate the necessary wood for 2 chairs, 5 tables and 1 bed 
function woodRequires(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const totalWoodQuantity = perChairWood * chairQuantity + perTableWood *tableQuantity + perBedWood * tableQuantity;
    return totalWoodQuantity;
}
const requireWood = woodRequires(2, 5, 1);
console.log(requireWood,"cft");
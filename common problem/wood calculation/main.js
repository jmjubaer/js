function woodCalculation(chair,table,bed){
    perChairWood = 3;
    perTableWood = 10;
    perBedWood = 50;

    chairWood = chair*perChairWood;
    tableWood = table*perTableWood;
    bedWood = bed*perBedWood;

    totalWood = chairWood + tableWood + bedWood;

    return totalWood;
}

chairQuantity = 6;
tableQuantity = 1;
bedQuantity = 1;

totalCalculateWood = woodCalculation(chairQuantity,tableQuantity,bedQuantity) + " Cft";

console.log(totalCalculateWood);



//book Page Calculation./..

function paperRequirements(book1, book2, book3){
    if(typeof(book1) !== "number" || typeof(book2) !== "number" || typeof(book3) !== "number"){
        return "please Enter Valid Quantity"
    }
    let firstBookPage = 100*book1;
    let secondBookPage = 200*book2;
    let thirdBookPage = 300*book3;
    let totalPage = firstBookPage + secondBookPage + thirdBookPage + " page";
    return totalPage;
}
let pageCalculation = paperRequirements(5,3,5);
console.log(pageCalculation);
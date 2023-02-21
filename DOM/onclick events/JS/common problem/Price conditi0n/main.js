//Price condition .........

function priceCondition(quantity){
    primaryPrice = 100;
    scecondaryPrice = 80;
    finalDiscountPrice = 70;
    if(typeof quantity !== "number"){
        return "please Enter a valid Number";
    }
    if(quantity <= 100){
        let totalPrice = primaryPrice*quantity;
        return totalPrice;
    }else if(quantity <= 200){
        let primaryTicketPrice = 100*primaryPrice;
        let restQuantity = quantity - 100;
        let restPrice = restQuantity*scecondaryPrice;
        let totalPrice =  primaryTicketPrice + restPrice;
        return totalPrice;
    }else {
        let primaryTicketPrice = 100*primaryPrice;
        let scecondaryTicketPrice = 100*scecondaryPrice;
        let restQuantity = quantity - 200;
        let restPrice = restQuantity*finalDiscountPrice;
        let totalPrice = primaryTicketPrice + scecondaryTicketPrice + restPrice;
        return totalPrice;
    }
}


let sumPrice = priceCondition(250);
console.log(sumPrice);

// document.write(sumPrice);


//Rent Calculator...........
function payment(days){
    primaryRent = 500;
    scecondaryRent = 300;
    restRent = 100;
    if (typeof days !== "number"){
        return "Please enter a valid days"
    }
    if(days <= 10){
        let totalRent = days*primaryRent;
        return totalRent;
    }else if(days <= 20){
        let firstRent = 10*primaryRent;
        let remainingDays = days - 10;
        let totalRent = firstRent + (remainingDays*scecondaryRent);
        return totalRent;
    }else{
        let firstRent = 10*primaryRent;
        let secondRent = 10*scecondaryRent;
        let remainingDay = days - 20;
        let remainingRent = remainingDay*restRent;
        let totalRent = firstRent + secondRent + remainingRent;
        return totalRent;
    }
}

let rent = payment(50);
console.log(rent);

//publicBusFare......

function publicBusFare(person){
    let busCapacity = 50;
    let microCapacity = 11;
    let publicBusPrice = 250;
    if(person => 50){
        let restPerson = person % busCapacity;
        if(restPerson >= 11){
            let microPublic = restPerson % microCapacity;
            let publicBusCost = microPublic*publicBusPrice;
            return publicBusCost;
        }
        let publicBusCost = restPerson*publicBusPrice;
        return publicBusCost;
    }
}

let totalCost = publicBusFare(365);
console.log(totalCost);

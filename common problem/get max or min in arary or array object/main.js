// document.write("<h1>Get largest Number</h1>")
function findMax(num1, num2, num3=0, num4=0,num5=0){
    let maxNumber = Math.max(num1, num2, num3, num4,num5);
    if(maxNumber == num1){
        let result = "jm";
    }else if (maxNumber == num2){
        result = "JP";
    }else{
        result = "j..";
    }
    return result;
}

// document.write("<br/>")
// document.write(findMax(10,25,12,32));

// document.write("<br/>")
// document.write("<br/>")

// Max Number function

function maxNumArray(number){
    let largest = number[0];
    for(i = 0; i < number.length; i ++){
        let element = number[i];
        if (element > largest){
            largest = element
        }
    }
    return largest;
}


let arrayNumber = [167, 190, 120, 165, 137, 265];

let getLargestNumber = maxNumArray(arrayNumber);
document.write(getLargestNumber);

document.write("<br/>")
document.write("<h1>Get lowest Number</h1>")

// MIn number function 
function minNumArray(number){
    let largest = number[0];
    for(i = 0; i < number.length; i ++){
        let element = number[i];
        if (element < largest){
            largest = element
        }
    }
    return largest;
}

let getLowestNumber = minNumArray(arrayNumber);
// document.write(getLowestNumber);



let laptops = [
    {
        Brand: "Hp",
        Model: "840G3",
        RAM: "8GB",
        ROM: "256SSD",
        Processor: "i5",
        Generation: "6th",
        Price: 28000
    },
    {
        Brand: "DEll",
        Model: "vostro 14",
        RAM: "4GB",
        ROM: "1TB HDD",
        Processor: "i3",
        Generation: "11th",
        Price: 51000
    },
    {
        Brand: "Toshiba",
        Model: "C40-G-109",
        RAM: "4GB",
        ROM: "240SSD",
        Processor: "AMD A-9",
        Generation: "6th",
        Price: 29999
    },
    {
        Brand: "Lenovo",
        Model: "D330",
        RAM: "4GB",
        ROM: "128SSD",
        Processor: "Celeron",
        Generation: "6th",
        Price: 36000
    },
    {
        Brand: "Toshiba ",
        Model: "C40-G-11",
        RAM: "8GB",
        ROM: "256SSD",
        Processor: "i3",
        Generation: "10th",
        Price: 45900
    }
];

function cheapestLaptop(laptopList){
    let lowestPriceLaptop = laptopList[0];
    for(i = 0; i < laptopList.length; i++){
        let laptop = laptopList[i];
        if(lowestPriceLaptop.Price > laptop.Price){
            lowestPriceLaptop = laptop;
        }
    }
    return lowestPriceLaptop;
}

let mySelection = cheapestLaptop(laptops);
console.log(mySelection);

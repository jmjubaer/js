function findLeapYear(year){
    let leapYearArray = [];
    for(i = 0; i < year.length; i++){
        let element = year[i];
        if ((element % 4 === 0) && ((element % 100 != 0) || (element % 400 == 0 ) )){
                leapYearArray.push(element);
            }
    }
    return leapYearArray;
};

let yearArray = [2023, 2024, 2025, 2028, 2030];
let getLeapYear = findLeapYear(yearArray);
// console.log(getLeapYear);


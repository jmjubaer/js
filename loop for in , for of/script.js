let friends = [
    {name:"noyon",bFriend:"jubaer"},
    {name:"mehedi",bFriend:"Jubaer"},
    {name:"Rahat",bFriend:"jubaer"},
    {name:"rabbi",bFriend: "Rafi"},
    {name:"muaj",bFriend: "rabbi"}
]
let numbers = [45,75,45,621 ,4, 85 ,65, 45 ,26 ,43]

// for(let i = 0; i < numbers.length; i++){
//     let element = numbers[i];
//     console.log(element,i);
// }

// for( const number of numbers ){
//     console.log(number);
// }
// let nonBestFriend = [];
// let bestFriend = [];
// for(friend of friends){
//     if(friend.bFriend.toLowerCase() == "juBaer".toLowerCase()){
//         bestFriend.push(friend);
//     };
//     if(friend.bFriend.toLowerCase() !== "jubaer".toLowerCase()){
//         nonBestFriend.push(friend);
//     }
// }
// console.log(bestFriend,"Best friend");
// console.log(nonBestFriend);

// //one system there has some problem that need to solve
// function getBestFriend(friends){
//     let nonBestFriend = [];
//     let bestFriend = [];
//     for(friend of friends){
//         if(friend.bFriend.toLowerCase() == "juBaer".toLowerCase()){
//             bestFriend.push(friend);
//         };
//         if(friend.bFriend.toLowerCase() !== "jubaer".toLowerCase()){
//             nonBestFriend.push(friend);
//         }
//     }
// }

// console.log(getBestFriend(friends));


//another system
function getBestFriend(friends,search){
    let bestFriend = [];
    for(let friend of friends){
        if(friend.bFriend.toLowerCase().includes(search.toLowerCase())){
            bestFriend.push(friend);
        };
    }
    return bestFriend;
}

console.log(getBestFriend(friends,"jubaer"));
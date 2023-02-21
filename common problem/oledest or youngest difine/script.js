let person = [
    {name:'sakib', 
    age:30
},
    {name:'samiul', 
    age:20},
    {name:'sahid', 
    age:50
},
    {name:'samin', 
    age:10
}
];
//youngest .....
function youngest(person){
    let young = person[0];
    for(let i = 0; i < person.length; i++){
        let element = person[i];
        if(element.age < young.age){
            young = element;
        }
    }
    return young;
}
console.log(youngest(person));

// oldest ...............

function oldest(person){
    let old = person[0];
    for(let i = 0; i < person.length; i++){
        let element = person[i];
        if(element.age > old.age){
            old = element;
        }
    }
    return old;
}
console.log(oldest(person));

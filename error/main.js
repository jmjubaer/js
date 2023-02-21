

//use it when we have possiblity  get error (like load data from outside)
try{
    console.log(jm);
    jm = "jubaer";
}catch(error){
    console.log("get error");
    // console.log(error);
}finally{
    console.log("finally done ");
}

//module 30.5-4

let now = new Date();
console.log(now);

let present = new Date(2023-02-19);
let past = new Date(1971-03-12);

if(present < past){
    console.log(true);
}else{
    console.log(false);
}
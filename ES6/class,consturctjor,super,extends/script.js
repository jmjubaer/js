class JmFriend{
    name;
    work = "student"
    location = "morrelgonj"
    classes = "HSC"
    result;
    education(year){
        if(year <= 2023){
            console.log("I am psc, jsc, ssc, hsc passed");
        }else if(year <= 2020){
            console.log("I am psc, jsc, ssc passed");
        }else if(year <= 2018){
            console.log("I am psc, jsc passed");
        }else if(year <= 2015){
            console.log("I am psc passed");
        }
    }
    constructor(fName,fResult){
        this.name = fName;
        this.result = fResult;
    }
};


let rahat = new JmFriend('Rahat','3.50')
console.log(rahat);
rahat.education(2023);


let noyon = new JmFriend("noyon",'F');
console.log(noyon);
noyon.education(2023);



// extends .............

class Jubaer extends JmFriend{

    constructor(fName,fResult){
       super(fName,fResult);
    }
};

const jubaer = new Jubaer("jubaer","4.67");
console.log(jubaer);
jubaer.education(2023);
var fish = true;
var inland = true;
var rui = false;
var elish = true;

if(fish == true){
    if(inland == true){
        if( rui == true){
            document.write("Per Pice 50 taka");
        }else if(elish == true ){
            document.write("Per Pice 100 taka");
        }else{
            document.write("Please tell what your favorite inland fish");
        }
    }else{
        document.write("We not sell foreign fish")
    }
}else{
    document.write("We not sell foreign fish")
}
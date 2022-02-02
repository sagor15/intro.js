function inputDone(a){
    
        if(a%3==0 && a%5==0){
        console.log(a , " is foobar");
        }else if(a%3==0){
            console.log(a , " is foo")
        }
        else if(a%5==0){
        console.log(a , "  is bar");
    }
    else{
        console.log(a , "is not foo , bar , foobar.");
    }
    return a;
}

var result = inputDone(8);

let sum=0; for( let i = 0; i<=3;i++){ sum = sum + i; }
console.log(sum);

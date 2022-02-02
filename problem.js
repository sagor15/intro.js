// var first = 5;
// var second = 7;
// var tirth = 8;
// output hobe 7 , 8 ,5 second ,tirth , first

// [first , second , tirth] = [second , tirth , first];

// var temp = second;
// second = tirth;
// tirth = first;
// first = temp;


// console.log(first,second,tirth);






// 5 4 3 2 1

var first = 1;
var second = 2;
var thirt = 3;
var fourth = 4;
var five = 5;

// var temp = five;
// five = first;
// first = temp;
// second = fourth;
// thirt = thirt;
// fourth = second;






// console.log(first,second,thirt,fourth,five);


[first,second,thirt,fourth,five] = [five,fourth,thirt,second,first];

// console.log(first,second,thirt,fourth,five);


// 2 ta variable er theke konta boro ta nirnoyer jonno code

// function inputNumber(a,b){
//     if(a>b){
//         console.log(a,'is a big');
//     }
//     else{
//         console.log(b,'is a big');
//     }

// }
// inputNumber(50,100);


function inputNumber(a,b,c){
    if(a>b && a>c){
        console.log(a , "is a big");
    }else if(b>a && b>c){
        console.log(b,"is a big");
    }else{
        console.log(c,"is a big");
    }
}

inputNumber(100,25,50);


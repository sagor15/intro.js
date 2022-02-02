// function addNumber(num1,num2){
//     console.log(num1);
//     console.log(num2);
//     return total = num1+num2;
// }

// var firstNumber = 30;
// var secondNumber = 47;

// var result = addNumber(firstNumber,secondNumber);
// console.log('result velue :' + result);


// multiple object 

// var student1 = {
//     id : 115 ,
//      name: "abir adnan",
//       marks: 81 ,
//        phone:87986809 ,
//         hair: "div black"
//     };

// for loop prectice 


// for(var i = 0; i <= 20; i++){
//     console.log(i);
//     if(i == 10){
//         break;
//     }
// }

// var numbers = [12,15,30,45,10,78,25,46,89,79,100];

// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
//     console.log(number);
//     if(number >= 60){
//         break;
//     }
// }



// function getReminder(number1, number2) {
//     number1 % number2;
//   }
  
//   const reminder = getReminder(12, 2);
  
//   console.log(reminder);



//   function addNumber(number1, number2) {
//     return "Result is " + number1 + number2;
//    }
   
//    var result = addNumber(5, 4);
//    console.log(typeof result);


// inches to feet convert 

// function inchesTofeet(inches){
//     var feet = inches / 12;
//     return feet;
// }


// console.log(inchesTofeet(168) + ' feet');


// odd naki even bole dibe

// function inputItems(a){
//     var result = a;
//     if(a % 2 == 0){
//         console.log(a + ' is a even number. ' );
//     }else{
//         console.log(  a + ' is a odd number. ');
//     }
//     return result;
// }

//  inputItems(242);

// console.log(seen);


// function leapYear(year){
//     var result = year;
//     if((year%4==0 ) && (year%100==0)  && (year%400==0)){
//         console.log( result + ' its a leap year');
//         return result;
        
//     }else{
//         console.log( result + ' its a not leap year');
//         return result;
//     }
// }
// leapYear(2100);


// function getFactorial(num){
//     var factorial = 1;
//     for(var i = 1; i <= num; i++){
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// var firstFactorial = getFactorial(65);
// console.log(firstFactorial);




// function getFactorial(inputanything){
//     var factorial = 1;
//     for(var i = 1;i <= inputanything; i++){
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// var reuslt = getFactorial(5);
// console.log(reuslt);


// for( var i = 10; i >= 1; i--){
 
//     console.log(i)
// };






// home work 


///////////////////////////////////////////////////////////////

//1. celcius to farenheit convert   

function inputCelcius(celcius){
    var farenheit = (celcius * 1.8)+32; // F = (°C × 9/5) + 32
    return farenheit;
}

var result = inputCelcius(65);
console.log(result);

///////////////////////////////////////////////

//2.farenheit to celcius convert 

function inputFarenheit(farenheit){
    var farenheit = ( farenheit - 32)* 5/9;   //F = (°C -32) * 5/9;
    return farenheit; 
}
var ResultFarenheit = inputFarenheit(56);
console.log(ResultFarenheit);


///////////////////////////////////////////////

//3.grade calculation

///////////////////////////////////////

function inputNumber(number){
    if(number < 32){
        console.log("your grade is : F");
        console.log('you have fail');

    }else if(number >= 33 && number < 50){
        console.log("your grade is : C");
        console.log('your have pass');
    }else if(number >= 50 && number < 70){
        console.log(" your grade is : A-");
        console.log('you have pass');
    }else if(number >= 70 && number < 80){
        console.log("your grade is : A");
        console.log('you have pass');
    }else if(number >= 80 && number <90){
        console.log("your grade is : A+");
        console.log("you have pass");
    }else if(number >=90 && number <= 100){
        console.log("your grade is : Golden A+");
        console.log("you have pass");
    }
    else{
        console.log("you are biddasagor..... go to nasa");
    }
    return number;
};
var ResultGrade = inputNumber(90);
console.log(ResultGrade);

//////////////////////////////////////////////////




//4.simple interest
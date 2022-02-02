function lowestNumber(numbers){
    let lowest = numbers[0];
    for(let i =0; i < numbers.length; i++ ){
        let element = numbers[i];
        // console.log(element);
        if( element < lowest ){
             lowest = element ;
        }
    }
    return lowest;
}

// var total = lowestNumber([200,300,500,5]);
// console.log(total);


// lowest number of array find out 

// function lowestNumber(numbers){
//     let lowest = numbers[0];
//     for(let i = 0; i < numbers.length;i++){
//         let element = numbers[i];
//     }
// }
// var result = Math.floor(12.96);
// console.log(result);


// function add(a, b){
//     return a + b;
//   }
//   console.log(add("adam" + "eve"));


//   var first = "Rafsan";
//   var second = "Samira";
  
//   var temp = first;
//   first = second;
//   second = temp;

//   console.log(first,second);
//   var result = 100 + Math.random()*100;
//   console.log(result);

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter == 'a'){
    count++;
  }
}
console.log(count)






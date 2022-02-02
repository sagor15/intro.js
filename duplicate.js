// remove duplicate item in array

const names = ['abul','kabul','cabul','naima',
'naima','sumu','habiba','kona','tondra','dabir','sakib','osman',
'jahid','kona','tanzina','naima','abul','yasin','siam','anonto',
'tondra','kabul','naima','kona'];

function RemoveDuplicate(names){
    const unique = [];
    for (const element of names){
        if(unique.indexOf(element)== -1){
            unique.push(element);
        }
    }
    return unique;
}
var result = RemoveDuplicate(names);
console.log(result);

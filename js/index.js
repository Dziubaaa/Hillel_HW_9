function summOfAll (){
    let sum = 0;

    return function (value){
        sum += value;
        return sum;
    }
 }

 const sum = summOfAll();

console.log(sum(3)) // 3 
console.log(sum(5)) // 8 
console.log(sum(20)) // 28

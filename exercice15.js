let array = [10 , 20 ,30 ];
let count = 0 ;

for(i in array){
    count += array[i];
}
let result = count / array.length;
console.log(result);
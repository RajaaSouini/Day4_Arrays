let table = [3 , 7 , 9 , 5 , 2 , 1 ];
let sum = 0;
let moyenne = 0 ;
let min = table[0];
let max = table[0];

for(i in table){
    sum += table[i];
    if(table[i] < min){
        min = table[i];
    }
    if(table[i] > max){
        max = table[i]
    }

}
moyenne = sum/table.length;
console.log("sum : " , sum);
console.log("average : " , moyenne);
console.log("min :", min);
console.log("max :", max);
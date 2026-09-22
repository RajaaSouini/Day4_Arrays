let table = [1, 2 , 3 , 4 , 5 ];

let a = 3 ;
let result = -1 ;

for(i = 0 ; i < table.length ; i++){
    if (table[i] === a){
        result = i;
    }
}
console.log(result)
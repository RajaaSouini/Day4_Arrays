let table = [1, 1, 2, 2, 2, 3, 1, 1 , 1 , 1];
let a = table[0];
let count = 1;
let max = 1;

for(i = 1 ; i< table.length ; i++){
    if(table[i] === a){
        count += 1 ;
       
        if(count > max){
            max = count;
        }
    }else if (table[i] !== a ){
        a = table[i];
        count = 1 ;
    }
}

console.log(max);





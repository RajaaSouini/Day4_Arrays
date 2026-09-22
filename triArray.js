let table = [4 , 3 , 2 ,5 ,6 , 0];

let n = table[0];
for(i = 0 ; i < table.length ; i++){
    if(table[i+1] < table[i]){
        let temp = table[i];
        table[i] = table[i+1];
        table[i+1] = temp;
    }
}
console.log(table);

//tri 
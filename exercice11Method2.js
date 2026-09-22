//insérons dans un tableau qui doit etre trier 

let table = [1, 2 , 4 , 5 ];

let elem = 3 ;
table.unshift(elem);
let i = 0;
while(i < table.length-1 && table[i] > table[i+1]){
    let temp = table[i];
    table[i] = table[i+1];
    table[i+1] = temp;

    i++ ; 
}



console.log(table); 
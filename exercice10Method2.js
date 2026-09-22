let table = [10 , 20 , 30 , 40 , 50];
// supprimons un elem sans declarer un autre tableau
let elem = 10 ; 
let indice = 0 ;
for (let i = 0 ; i < table.length ; i++){
  if (table[i] === elem){
    indice = i ;
  }
}

for(let j = indice ;j < table.length ; j++ ){
   table[j] = table[j+1];
}
table.pop();

console.log(table);

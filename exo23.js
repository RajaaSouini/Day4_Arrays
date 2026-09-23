

let Arr = [10,30,20,60,70,40,90,50]


function EvenSum(Arr_){
    let sum = 0;
    for(let i=0;i<Arr.length;i+=2)
        sum += Arr[i]
    return sum
}

console.log(EvenSum(Arr))
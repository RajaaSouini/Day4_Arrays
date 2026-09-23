let Arr = [7,1,2]

function Average_(Arr)
{
    let sum = 0;
    for(let i=0;i<Arr.length;i++)
        sum += Arr[i]
    let avg = sum/Arr.length
    return Math.round(avg*100)/100

}
let avg = Average_(Arr)
console.log(avg)

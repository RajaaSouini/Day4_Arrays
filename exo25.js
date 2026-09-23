let arr = [5, 8,10, 4,2, 9]

let v = 1

function FindIndex(Arr,v)
{
for(let i=0;i<Arr.length;i++)
    if(Arr[i]===v)
        return i 

return -1
}


console.log(FindIndex(arr,v))
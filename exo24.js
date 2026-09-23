
function stats(arr)
{
    let sum=arr[0],min=arr[0],max=arr[0],avg;
    
    for(let i=1;i<arr.length;i++)
    {
        sum += arr[i]

        if(arr[i]>max)
            max = arr[i]
        if(arr[i]<min)
            min = arr[i]
    }

    avg = sum/arr.length

    return [sum,avg,min,max]

}


let Arr = [2,5,3,7,6,1]

let res = stats(Arr)

console.log(`sum: ${res[0]}, average: ${res[1]}, min:${res[2]}, max:${res[3]}`)
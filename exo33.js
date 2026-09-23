let arr = [40,90,2,90,7,10]

function getSecMax(arr)
{
    let max_1= arr[0]
    let max_2 = arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max_1){
            max_2 = max_1
            max_1 = arr[i]
        }
        else if(arr[i]<max_1 && arr[i]>max_2)
            max_2 = arr[i]
    }

    return `1st max:${max_1}, 2nd max:${max_2}`
}


console.log(getSecMax(arr))
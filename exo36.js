let arr = [1, 1, 2, 2, 2, 3, 1, 1, 1, 1]



let count = 1
let maxCount = 0
let head = arr[0]

for(let i=1;i<arr.length;i++)
{
    if(arr[i]===head)
    {
          count++
          if(maxCount<count){
                maxCount = count
                
        }
    }
        

    else{
        count = 1
        head = arr[i]
            
    }
}




const arr = [4,9,3,5]

console.log('INPUT', JSON.stringify(arr))

function splitArray(arr){
    const pivot = arr[0]
    const left=[]
    const right=[]

    if(arr.length < 1) {
        return []
    }
    
    for(let i=0; i < arr.length; i++){
        if(pivot > arr[i]){
            left.push(arr[i])
        }
        
        if(pivot < arr[i]){
            right.push(arr[i])
        }
    }


    return [ left, pivot, right]
}

function quickSort(arr){
    if(arr.length < 1) {
        return []
    }

    const [ left, pivot, right] = splitArray(arr)

    const sortedLeft = quickSort(left)
    const sortedRight = quickSort(right)
    
    return [].concat(sortedLeft, pivot, sortedRight)
}

console.log('OUTPUT', JSON.stringify(quickSort(arr)))
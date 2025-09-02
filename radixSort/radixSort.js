const arr = [52,12,5,1,95,13,25,85,35,9]
console.log('INPUT:', arr)

function getDigit(num, place) {
    const maxLength= Math.max(...arr).toString().length
    const numToCheck = num.toString().length === maxLength ? num.toString() : '0'.repeat((maxLength -num.toString().length))+num

    return numToCheck.charAt(place)
}


function radixSort(arr) {
    const maxDigit = Math.max(...arr).toString()

    for(let k=maxDigit.length-1; k >=0; k--){
        console.log('DIGIT_INDEX:',k)
        const buckets = Array(10).fill().map(()=> [])
        
        for(let i=0; i < arr.length; i++){
            const digit = getDigit(arr[i], k)
            buckets[digit].push(arr[i])
        }
        console.log('BUCKETS:',JSON.stringify(buckets))
        arr=buckets.flat(1)
    }
   
    return arr;
}

console.log('OUTPUT:', JSON.stringify(radixSort(arr)))

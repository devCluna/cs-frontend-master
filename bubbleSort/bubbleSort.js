const arr = [5, 2, 9, 1, 5, 6]
//expected output: [1, 2, 5, 5, 6, 9]
/* console.log('INPUT', arr) */

function bubbleSort(arr) {

    let iterations=0
    let swap = false
    do {
        swap=false
         for(let i=0; i < arr.length-1; i++){
        let current=arr[i]
        if(arr[i]> arr[i+1]) {
            arr[i]=arr[i+1]
            arr[i+1]=current
            swap=true
        }
    }

    }while(swap)
    return arr
}
/* 
console.log('OUTPUT',bubbleSort(arr)); */

module.exports = bubbleSort
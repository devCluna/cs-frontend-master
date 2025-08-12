const arr = [5, 2, 9, 1, 5, 6];
// expected output: [1, 2, 5, 5, 6, 9]

/* console.log('INPUT', arr) */

function insertionSort(arr) {
    for(let i=1; i < arr.length; i++) {
        let valToInsert= arr[i]
        let j
        for(j= i-1; j>=0 && arr[j]> valToInsert ; j--){
            arr[j+1]= arr[j]
        }
        arr[j+1]= valToInsert
    }
   return arr;
}
/* console.log('OUTPUT', insertionSort(arr)) */

module.exports = insertionSort;
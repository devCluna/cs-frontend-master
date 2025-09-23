const input = [1,3,4,5,6,8,12,14,16]
/* console.log('INPUT:', JSON.stringify(input)) */

function binarySearch(target, input){
    let min=0
    let max= input.length-1
    let selectedElement, index

    while(min <= max) {
        index = Math.floor((min + max) / 2)
        selectedElement = input[index]

        if(target === selectedElement) {
            return index
        }

        if(selectedElement < target) {
            min = index + 1
        } else {
            max = index - 1
        }
    }
    
    return -1
}

/* console.log('OUTPUT:', JSON.stringify(binarySearch(12,input))) */
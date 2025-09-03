const input = [1,3,4,5,6,8,12,14,16]

function binarySearch(target, input){
    let min=0
    let max=input.length -1
    let index, element
    
    while(min <=max){
        index = Math.floor((min+max)/2)
        element=input[index]

        if(element === target){
            return index
        }
        
        if(element > target) {
            console.log(element)
            max = index-1
        }else {
            console.log(element)
            min = index+1 
        }
    }

    return -1

}

console.log('OUTPUT:', JSON.stringify(binarySearch(3,input)))
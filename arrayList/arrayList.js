

class ArrayList {
    constructor() {
        this.data={}
        this.length=0
    }

    push(value){
        //adds info at the end
        this.data[this.length]=value
        this.length= this.length+1
    }

    pop(){
        //removes item at the end
        delete this.data[this.length-1]
        this.length= this.length-1
    }

    
    get(index){
        //get info by index
        return this.data[index]
    }

    delete(index){
        //removes item from the arrayList and collapses the array
        delete this.data[index]
        Object.keys(this.data).slice(index+1).map(i =>{
            this.data = {...this.data, [index]:this.data[i-1] }
            index=index+1
        })


    }
}
const array = new ArrayList()
array.push(1)
array.push(2)
array.push(3)
array.push(4)
array.push(5)
array.push(6)
console.log('ARRAY',array)
array.pop()
array.delete(1)
console.log('GET',array.get(0))


console.log(array)
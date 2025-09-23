

class ArrayList {
    constructor() {
        this.data={}
        this.length=0
    }

    push(value){
        //adds info at the end
        this.data[this.length]=value
        this.length=this.length+1
    }

    pop(){
        //removes item at the end
        delete this.data[this.length-1]
        this.length=this.length-1
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
        this.length= this.length-1
        
        
    }
}
module.exports = ArrayList;

const array = new ArrayList()

//Add new elements to the array
array.push(1)
array.push(2)
array.push(3)
array.push(4)
console.log('STATUS:', array)


//Remove last element from the array
array.pop()
console.log('STATUS:', array)

//Get element by index
console.log('SELECTED ELEMENT', array.get(1))

//Delete element by index and collapse the array
array.delete(1)
console.log('STATUS:', array)

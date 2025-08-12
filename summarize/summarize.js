const arr = [1, 2, 3, 4, 5, [6, 7, 8], 9, [[10, 11], 13, [14]]];
//EXPECTED OUTPUT:  93


function summarize(arr) {
    let sum = 0;
    arr.forEach(element => {
        if (Array.isArray(element)) {
            sum = sum + summarize(element);
        } else {
            sum += element;
        }
    });
    return sum;
}

/* console.log("SUMMARIZE", summarize(arr)); */
module.exports = summarize;
const n = 5;

function factorial(n) {
  if (n < 0) {
    return 1;
  }
    if (n === 0 || n === 1) {
        return 1;
    }
    

    return n * factorial(n - 1);
}

/* console.log('OUTPUT', factorial(n)); // expected output: 120 */

module.exports = factorial;

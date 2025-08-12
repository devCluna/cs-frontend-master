const arr = [9, 5, 3, 8, 2, 1, 6, 6];
console.log("INPUT", JSON.stringify(arr));

function splitArrays(arr) {
  const arraySize = Math.floor(arr.length / 2);
  const left = arr.slice(0, arraySize);
  const right = arr.slice(arraySize);
  return [left, right];
}

function merge(arr1, arr2) {
  let result = [];
  let pointer1 = 0;
  let pointer2 = 0;

  //sorting
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      result.push(arr1[pointer1]);
      pointer1++;
    }
    if (arr2[pointer2] === arr1[pointer1]) {
      result.push(arr1[pointer1])
      result.push(arr2[pointer2]);
      pointer1++;
      pointer2++;
    }
    if (arr2[pointer2] < arr1[pointer1]) {
      result.push(arr2[pointer2]);
      pointer2++;
    }
  }
  // If there are remaining elements in either array, concatenate them
  result = result.concat(arr1.slice(pointer1)).concat(arr2.slice(pointer2));

  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const [left, right] = splitArrays(arr);
  const splittedLeft = mergeSort(left);
  const splittedRight = mergeSort(right);

  return merge(splittedLeft, splittedRight);
}

console.log("OUTPUT:", JSON.stringify(mergeSort(arr)));

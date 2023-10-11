// Move all negative numbers to beginning.
// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5

const arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
function move(arr) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      tempArr.unshift(arr[i]);
    } else {
      tempArr.push(arr[i]);
    }
  }
  return tempArr
}
console.log(move(arr));

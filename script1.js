const str = 'webmaster';
function capitalize(){
  let arr=[...str];
  const elem = arr[0].toUpperCase();
  arr.shift()
  arr.unshift(elem)
  return arr.join('')
}
console.log(capitalize(str));
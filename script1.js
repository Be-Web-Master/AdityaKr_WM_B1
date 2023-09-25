const str = 'webmaster';
function capitalize(){
  let arr=[...str];
  const elem = arr[0].toUpperCase();
  arr.shift()
  arr.unshift(elem)
  console.log( arr.join(str));
}
capitalize(str)
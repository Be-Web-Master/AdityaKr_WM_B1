function findOneNum(elem , arr){
  for (let i = 0; i < arr.length; i++) {
      if(arr[i] === elem){
        return true ;
      }
    }
  return false 
}
console.log(findOneNum(21,[54,456,66,]));
console.log(findOneNum(21,[54,21,456,66,21]));
console.log(findOneNum(21,[54,456,66,218,6576,98,43,87]));
console.log(findOneNum('a',['x','t','d','r','z']));
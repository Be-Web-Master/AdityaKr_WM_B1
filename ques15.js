let arr = [
    { title: 'The Great Gatsby', rating: 4.7 },
    { title: 'To Kill a Mockingbird', rating: 4.5 },
    { title: 'Pride and Prejudice', rating: 4.8 },
    { title: 'Animal Farm', rating: 4.6 }
  ]
for(let i = 0; i<arr.length; i++){
    if(arr[i].rating > 4.6){
        console.log(arr[i])
    }
}

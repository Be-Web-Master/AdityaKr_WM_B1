const form = document.getElementById("form");
const btn = document.getElementById("btn");
const num = document.getElementById("number");
const error = document.getElementById("errormsg");
const card = document.getElementById("card");
const id = document.getElementById("userId");
const title = document.getElementById("title")

const submitHandle = (event) =>{
    event.preventDefault();
    if(num.value >= 1 && num.value<=199){
        console.log(num.value);
    fetch(`https://jsonplaceholder.typicode.com/todos/${num.value}`)
    .then((response)=> response.json())
    .then((data)=>{
        id.innerText=data.id
        title.innerText=data.title
    }
)
.catch((error)=>console.log(error));
    }
    else{
        alert("number 1 to 99 dal bhai")
    }
};
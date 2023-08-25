const idInput = document.getElementById("idInput");
const todoList = document.getElementById("todoList");
const submitBtn = document.getElementById('submitBtn');
const API_URL = (idInputVal) => `https://jsonplaceholder.typicode.com/todos/${idInputVal}`;
const todoLiData = []

const clearTodolist = () => {
    todoLiData.innerHtml='';
}
const updateTodoList=()=>{
    clearTodolist();
    for (const key of todoLiData) {
        addLIElement(key)
    }
}

const addLIElement = (title) => {
    todoLiData.push(title)
    const liTagElement = document.createElement('li');
    liTagElement.innerText=title;
    todoList.append(liTagElement);
}

const getApiData = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    return data
}

const handlerAddTaskSubmit = async (event) => {
        event.preventDefault();
        const idInputVal = idInput.value
        if(idInputVal === ''|| idInputVal < 0 || idInputVal > 200){
            alert("enter a valid input")
            return
        }
        submitBtn.innerText='Adding'
        const todoData = await getApiData(API_URL(idInputVal))

        if(!todoData.title){
            alert("Failed to Get Data");
            submitBtn.innerText='Add'
            return
        }
        addLIElement(todoData.title);
        idInput.value='';
        console.log(todoLiData);
        submitBtn.innerText='Add'

};

const handlerSearchInput = (event) => {
   const value = event.target.value;

   console.log({value});
   let result = todoLiData.filter((val) => val.includes(value))

   console.log({result});
   clearTodolist();
   if(result.length > 0){
    result.map((li)=>{
        addLIElement(li)
        console.log({li});
    })
   }
}

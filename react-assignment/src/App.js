import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);


 function deleteNote(i){
    setData((data)=>{
      return data.filter((elem,id)=>{
        return id !== i
      })
    })
  }
  
 function handleButtonSubmit(){
  if (!title || !description) return;
    const newNote = {title, description}
        setData([...data, newNote])
        setTitle('')
        setDescription('')
  }

  const updateItem = (todo, idx) => {
    setDescription(todo.description);
    setTitle(todo.title);
    setData((arr) => {
      return arr.filter((elem , id) => idx !== id);
    });
  };

  return (
    <>
  <div className="box">
  <h1 id="font">React TodoList</h1>
  <div id="FormInput">
    <form
      id="Form"
      action=" "
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        className="rounded-full ... border-4 border-black-200 px-8 ... py-3 ... caret-pink-500 ..."
        id="inputField"
        value={title}
        placeholder="title"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <textarea
        className="rounded-full ... border-4 border-black-200 px-8 ... caret-pink-500 ..."
        placeholder="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <br />
      <button
        className="rounded-full ... ml-8 ... px-12 ... py-4 ... bg-sky-500"
        onClick={() => {
          handleButtonSubmit();
        }}
      >
        Submit
      </button>
    </form>
  </div>
  <div className="grid gap-4 grid-cols-3 grid-rows-3" id="CardBox">
        {data.map((data, id) => {
          return (
            <div className="card" key={id}>
              <div className=" place-content-around">
                <span onClick={() => updateItem(data , id)}>✏️</span>
                <span onClick={() => deleteNote(id)}>❌</span>
              </div>
              <h1 className="font" >{data.title}</h1> <br /> {data.description}
            </div>
          );
        })}
  </div>
  </div>
    </>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [isChecked , setChecked] = useState(false)
  function toggle(){
    setChecked(!isChecked)
  }

  function DeleteItem(id) {
    setData((data) => {
      return data.filter((item, i) => {
        return i !== id;
      });
    });
  }
  return (
    <div className="box">
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
            value={input}
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            className="rounded-full ... ml-8 ... px-8 ... py-4 ... bg-sky-500"
            onClick={() => {
              const newData = [...data, input];
              setInput("");
              setData(newData);
              console.log({ newData });
            }}
          >
            Submit
          </button>
          <br />
          <label>Toggle Box:</label>
          <input onClick={toggle} type="checkBox" checked={isChecked} />
        </form>
      </div>
      {isChecked ?
      <ol>
      {data.map((obj, id) => {
        return (
          <li>
           {id+1}.{obj} <span onClick={() => DeleteItem(id)}> ❌ </span>
          </li>
        );
      })}
     </ol> :
      <div className="grid gap-4 grid-cols-3 grid-rows-3" id="CardBox">
        {data.map((obj, id) => {
          return (
            <div className="m-5 card">
              {id + 1}.{obj} <span onClick={() => DeleteItem(id)}> ❌ </span>
            </div>
          );
        })}
      </div>
    }
    </div>
  );
}

export default App;

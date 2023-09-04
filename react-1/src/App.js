// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

export default function ReactComp() {
  const [count, setCount] = useState(0);
  const addCount = (e) => {
    setCount(count + 1);
  };
  const subCount = (e) => {
    setCount(count - 1);
  };
  return (
    <div id="box">
      <button id="sub" class="btn" onClick={subCount}>
        {" "}
        ➖{" "}
      </button>
      <span>Count:{count}</span>
      <button id="add" class="btn" onClick={addCount}>
        {" "}
        ➕{" "}
      </button>
      <InputForm/>
    </div>

  );
}

function InputForm() {
  const [inputValue , setInputValue] = useState('');
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter your name" onChange={(e) => {setInputValue(e.target.value)}}value={inputValue} />
        <div>{inputValue}</div>
        <input type="submit" />
      </form>
    </div>
  );
}

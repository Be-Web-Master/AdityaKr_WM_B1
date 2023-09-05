// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import { InputForm } from "./InputForm";
import { DataList , dataArray  } from "./DataList";

export default function ReactComp() {
  const [count, setCount] = useState(0);
  const addCount = (e) => {
    setCount(count + 1);
  };
  const subCount = (e) => {
    setCount(count - 1);
  };
  return (
    <>
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
        <InputForm  rcCount={count}>
         {count < 5 ?(<Comp1 compCount={count * 5}></Comp1>):(<Comp1 compCount={count *15}></Comp1>) }
         {count > 5 && <div>Hello from div</div>}
        </InputForm>
        {dataArray.map((obj , idx) => {
           const{a , b} = obj
           return <DataList order={idx+1} a={a} b={b} />
        })}
      </div>
    </>
  );
}
const Comp1 = (props) => {
  const {compCount} = props;
  return <div> From Comp1 : {compCount} </div>;
}
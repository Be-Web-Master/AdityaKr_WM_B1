import React from "react";
import { useState } from "react";

export const Card = ({obj , i}) => {
    const [comment, setComment] = useState([]);
    const [count , setCount] = useState('');
    
    const OnSubmitHanddle = (e)=> {
      e.preventDefault();
      setComment([e.target.value , ...comment])
    }
  return (
    <div key={i} className="card ">
      <h1>{obj.food.label}</h1>
      <img className="img" src={obj.food.image} />
      <form onClick={OnSubmitHanddle}>
        <input type="text" onChange={(e) => setCount(e.target.value.length)}/>
        <button type="submit" className="saveButton">save</button>
      </form>
      <p>Comment:{comment}</p>
      
  <br/>
      <span>Count:{count}</span>
    </div>
  );
};


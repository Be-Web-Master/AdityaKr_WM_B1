import { useState } from "react";
function InputForm(props) {
    let {rcCount , children} = props

    const [inputValue, setInputValue] = useState("");
    console.log("3" , {inputValue , children});
    return (
      <div>
        <form>
          <div>count In Form:{rcCount} </div>
          {children}
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            value={inputValue}
          />
          <div>{inputValue}</div>
          <input type="submit" />
        </form>
      </div>
    );
  }
export {InputForm};
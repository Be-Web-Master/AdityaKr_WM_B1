import "./App.css";
import {Card} from './card'
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({ value:" "});

  const url =
    "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7a691c6cdmshbf5922f7013603fp1b3f7djsn79c774107289",
      "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
    },
  };
  const apiCall = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      setData(result.hints);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    apiCall();
  }, []);
  console.log(data);
  return (
    <>
  <input
    className="input"
    onChange={(e) =>
      setSearch((search) => {
        search.value = e.target.value;
        return { ...search };
      })
    }
  />
    <div className="App">
      {data.map((obj , i) =>{
        // if(obj.food.label.includes(setSearch))
          return (
             <>
             <Card
                 obj = {obj}
                 i = {i}
             />
             </>
          );
        })}
    </div>
   </>
  )
}

export default App;

import { useEffect, useState } from "react";

export default function Prodcut() {

  //1. by default it is called for every render and rerender
  //2. you can it from getting called on render by passing a blank array
  //3. you can also pass variable in array for which particular rerender you eant to cALL IT

  let [name, setName] = useState("thor");

  let [age,setAge]=useState(24)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response=> response.json())
    .then(json=>console.log(json));


    return function(){
      console.log("dummy unmounted");
    }
  },[age]);

  return (
    <div className="product">
      <h1>componet mounted and unmounted data</h1>
      <h2>{name}</h2>
      <button onClick={()=>{
        setName('Rajan')
      }}>click here </button>

      <h2>{age}</h2>
      <button onClick={()=>{
        setAge(28)
      }}>check age</button>
    </div>
  );
}

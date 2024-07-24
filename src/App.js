import "./App.css";
import Header from "./Header";
import Products from "./products";
import { useState } from "react";

function App() {
  //let name ="rajan" // this is normal variable.
  let [name1, setName1] = useState("rajan"); //this is state variable use in function first line

  let [name, setName] = useState();
  let [age, setAge] = useState();
  function changedata() {
    // this function is display the value which is passed in the function shown when clicked the button
    setName("monika");
    setAge(26);
  }

  let countries = [
    {
      name: "india",
      captial: "New Delhi",
    }, 
    {
      name: "dubai",
      captial: "abu-dubai",
    },{
      name: "india",
      captial: "New Delhi",
    }, 
    {
      name: "dubai",
      captial: "abu-dubai",
    }, {
      name: "india",
      captial: "New Delhi",
    }, 
    {
      name: "dubai",
      captial: "abu-dubai",
    },
  ];
  return (
    <>
      <h2>{name1}</h2>
      {/* on butto clicked the value passed in the state function data is display */}
      {countries.map((country, index) => {
        return (
          <div className="data" key={index}>
            <h3>{country.name}</h3>
            <p>{country.captial}</p>
          </div>
        );
      })}
      {/*  */}
      {<br></br>}
      <div className="products">
        <Header />
        <Products />
      </div>
      <div className="App">
        <h1>Shopping Mart</h1>
      </div>{" "}
      {<h2>name </h2>}
      <input
        type="text"
        placeholder="enter name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="enterAge"
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          console.log(name, age); // display this value enter input filed shown in console when click oh this button
        }}
      >
        submit
      </button>
      <button onClick={changedata} className="btn-sub">
        click
      </button>
      {<h3>{name}</h3>}
      {<h3>{age}</h3>}{" "}
    </>
  );
}

export default App;

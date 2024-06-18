import "./App.css";
import Header from "./Header";
import Products from "./products";
import { useState } from "react";

function App() {
  // let [name1, setName1] = useState("rajan");

  // function changedata() {
  //   setName("monika");
  //   console.log(name);
  // }

  // let [name, setName] = useState();
  // let [age, setAge] = useState();

  let countries = [
    {
      name: "india",
      captial: "New Delhi",
    },
    {
      name: "new zealand",
      captial: "wellington",
    },
    {
      name: "chaina",
      captial: "chin-cin",
    },
  ];
  return (
    <>
      {countries.map((country, index) => {
        return (
          <div className="data" key={index}>
            <h3>{country.name}</h3>
            <p>{country.captial}</p>
          </div>
        );
      })}
      {/*  */}
      {/* <h2>{name1}</h2>
        <button onClick={changedata}>click</button> */}
      {/* <div className="products">
          <Header />
          <Products />
        </div><div className="App">
        <h1>Shopping Mart</h1>
      </div> */}

      {/* <h2>name </h2> */}
      {/* <h3>{name}</h3> */}

      {/* <input
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
          console.log(name, age);
        }}
      >
        submit
      </button> */}
    </>
  );
}

export default App;

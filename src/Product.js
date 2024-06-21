import { useState } from "react";

function Product(props) {
  let [isAvailable, setIsAvailable] = useState("yes"); // state variable
  //make the without callbcak function using a for state
  // function makeNotavailable() {
  //   setIsAvailable("no");
  // }
  return (
    <>
      <div className="product">
        <img className="img" url={props.url}></img>
        <h3>{props.name}</h3>
        <p>RS.{props.price}</p>
        <p>{isAvailable}</p>{" "}
        {/* display the value using in the state variable */}
        <button
          onClick={() => {
            //second type using a function using a use state
            setIsAvailable("no");
          }}
        >
          click
        </button>
        {/* <button onClick={makeNotavailable}>click</button> */}
        {/* without callback function button value is changed */}
      </div>
    </>
  );
}

export default Product;

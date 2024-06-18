import { useState } from "react";

function Product(props) {
  let [isAvailable, setIsAvailable] = useState("yes");
  //make the smile function using a for state
  // function makeNotavailable() {
  //   setIsAvailable("no");
  // }
  return (
    <>
      <div className="product">
        <img className="img" url={props.url}></img>
        <h3>{props.name}</h3>
        <p>RS.{props.price}</p>
        <p>{isAvailable}</p>
        <button
          onClick={() => {
            //second type using a function using a use state
            setIsAvailable("no");
          }}
        >
          click
        </button>
      </div>
    </>
  );
}

export default Product;

import { useEffect, useState } from "react";
import "./App.css";
import Prodcut from "./Product";


function App() {

  // let [productVisible,setProductVisible] =useState(false);

  let [users,setUsers]=useState([])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      setUsers(data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  return (
    <div className="App">
{/*      
      <h1>welcome</h1>

      <button onClick={()=>{
        setProductVisible(true)
      }}>show product</button>
      <br></br>

      <button onClick={()=>{
        setProductVisible(false)
      }}>hide Product</button>

      {
        productVisible==true?
        (
          <Prodcut/>
        )
        :null
      } */}

      {
        users.map((user)=>{
          return (
            <div className="user" key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.username}</p>
              <p>{user.website}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;

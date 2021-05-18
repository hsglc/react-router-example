import "./App.css";
import React, { useEffect, useState } from "react";

function Item({match}) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
      const item = await data.json();
      console.log(item);
      setItem(item);
    };
    fetchItems();
    
    
  }, []);

  return (
    <div className="App">
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <img src={item.image} alt="product" ></img>
      
    </div>
  );
}

export default Item;

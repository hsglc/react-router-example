import "./App.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await fetch("https://fakestoreapi.com/products?limit=10");
      const items = await data.json();

      setItems(items);
      console.log(items);
    };
    fetchItems();
  }, []);

  return (
    <div className="App">
      <h1>Shop</h1>
      {items.map((item) => (
        <h2 key={item.id}>
          <Link to={`shop/${item.id}`}> {item.title}</Link>
        </h2>
      ))}
    </div>
  );
}

export default Shop;

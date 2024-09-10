import React, { useEffect, useState } from "react";
import data from "../data";
import Card from "./Card";

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setMenuItems(data);
    // Get unique categories including "all"
    const uniqueCategories = ["All", ...new Set(data.map((item) => {
       const itm =  item.category
       return itm[0].toUpperCase() + itm.slice(1).toLowerCase()
}))];
    setCategories(uniqueCategories);
  }, []);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
    } else {
      const newItems = data.filter((item) => item.category.toLowerCase() == category.toLowerCase());
      setMenuItems(newItems);
    }
  };

  return (
    <main id="main">
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {categories.map((category, index) => (
            <button type="button" className="filter-btn" id={`filter-btn-${index}`} key={index} onClick={() => filterItems(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="section-center">
          {menuItems.map((item) => {
            return <Card item={item} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;

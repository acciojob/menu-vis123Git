import React, { useEffect, useState } from "react";
import data from "../data";

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setMenuItems(data);
    // Get unique categories including "all"
    const uniqueCategories = ["all", ...new Set(data.map(item => item.category))];
    setCategories(uniqueCategories);
  }, []);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
    } else {
      const newItems = data.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          {categories.map((category, index) => (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="section-center">
          {menuItems.map((item) => {
            const { id, title, img, desc, price } = item;
            return (
              <article key={id} className="menu-item">
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">${price}</h4>
                  </header>
                  <p className="item-text">{desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
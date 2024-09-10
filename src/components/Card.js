import React from "react";

function Card({ item }) {
  const { id, title, img, desc, price } = item;
  return (
    <div key={id} className="menu-item">
      <div className="img-box">
        <img src={img} alt={title} className="photo" />
      </div>
      <div className="item-info">
        <div className="heading-item">
          <h4>{title}</h4>
          <h4 className="price">${price}</h4>
        </div>
        <p className="item-text">{desc}</p>
      </div>
    </div>
  );
}

export default Card;

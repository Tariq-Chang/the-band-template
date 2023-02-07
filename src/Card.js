import React from "react";
import "./Card.css";

function Card({ city, date, imgPath }) {
  return (
    <div className="card">
      <img src={imgPath} />
      <h3>{city}</h3>
      <h3>{date}</h3>
      <h3>The Crazy Brown Fox Jumps Over The Lazy Dog.</h3>
      <input type="button" value="Buy Tickets" />
    </div>
  );
}

export default Card;

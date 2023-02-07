import { red } from "@material-ui/core/colors";
import React from "react";
import "./TourDate.css";

function TourDate({ month, tickets }) {
  let soldTickets = {
    background: "red",
    padding: "5px",
    color: "white",
    borderRadius: "2px",
    textAlign: "left",
  };
  return (
    <div className="tourdate">
      <div className="tourdate__show">
        <h3 className="tourdate__month">{month}</h3>
        <p className="tourdate__tickets">{tickets}</p>
      </div>
    </div>
  );
}

export default TourDate;

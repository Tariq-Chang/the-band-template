import { useState } from "react";
import "./App.css";
import Band from "./Band";
import Card from "./Card";
import Form from "./Form";
import Navbar from "./Navbar";
import TourDate from "./TourDate";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import SnapchatIcon from "@material-ui/icons/Chat";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedinIcon from "@material-ui/icons/LinkedIn";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__backgroundText" id="home">
        <h1>Chicago</h1>
        <p>Thank You Chicago. The Night We Won't Forget.</p>
      </div>
      <Band />
      <div className="app__tourDates" id="tour">
        <h1>Tour Dates</h1>
        <p>Remember To Book Your Tickets</p>
        <div className="wrapper">
          <div className="app__tourDateBox">
            <TourDate month="September" tickets="Sold out" />
            <TourDate month="November" tickets={3} />
            <TourDate month="September" tickets="Sold out" />
          </div>
        </div>
        <div className="cards">
          <Card
            city="New York"
            date="Thu 4 August 1999"
            imgPath="https://www.w3schools.com/w3images/newyork.jpg"
          />
          <Card
            city="London"
            date="Fri 12 Nov 2002"
            imgPath="https://www.w3schools.com/w3images/paris.jpg"
          />
          <Card
            city="Karachi"
            date="Mon 29 Jan 2001"
            imgPath="https://www.w3schools.com/w3images/sanfran.jpg"
          />
        </div>
        <div className="form__container" id="contact">
          <Form />
        </div>
        <div className="map__background"></div>
        <div className="app__footer">
          <div className="app__footerIcons">
            <FacebookIcon />
            <InstagramIcon />
            <SnapchatIcon />
            <PinterestIcon />
            <TwitterIcon />
            <LinkedinIcon />
          </div>
          <p>
            Powered by <span>w3.css</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

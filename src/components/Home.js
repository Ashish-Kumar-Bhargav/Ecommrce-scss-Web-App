import React from "react";
import { BiSearch } from "react-icons/bi";
import home from "../assets/home.png";
function Home() {
  return (
    <div className="home">
      <div className="container mx-3 py-3">
        <div className="title-container">
          <h2>Ecommerce Will Be For You What You Want It To Be.</h2>
          <div className="input-container">
            <input type="text" placeholder="Search Product on..." />
            <div className="icon">
              <BiSearch />
            </div>
          </div>
        </div>
        <div className="extra-image">
          <img src={home} alt="Home" />
        </div>
      </div>
    </div>
  );
}

export default Home;

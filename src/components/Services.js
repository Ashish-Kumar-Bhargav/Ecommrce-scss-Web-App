import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

function Services() {
  return (
    <div className="services-container mx-3 py-3">
      <div className="container">
        <div className="service one">
          <p>Weekly Deals</p>
          <h4>Free Delivery</h4>
          <button>Learn More</button>
          <div className="image">
            <img src={service1} alt="service" />
          </div>
        </div>
        <div className="service two">
          <div className="content">
            <h4>Upto 25% off</h4>
            <p>
              Learn More <HiArrowSmRight />
            </p>
          </div>
          <div className="image">
            <img src={service2} alt="service" />
          </div>
        </div>
        <div className="service three">
          <div className="image">
            <img src={service3} alt="service" />
          </div>
          <div className="content">
            <h4>Buy 2 Get 1 Free</h4>
            <p>
              Learn More <HiArrowSmRight />
            </p>
          </div>
        </div>
        <div className="service four">
          <p>Monthly Deals</p>
          <h4>Free Delivery</h4>
          <p>
            Learn More <HiArrowSmRight />
          </p>
          <div className="image">
            <img src={service4} alt="service" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

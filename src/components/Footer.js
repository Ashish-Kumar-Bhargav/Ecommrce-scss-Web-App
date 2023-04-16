import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
function Footer() {
  const data = [
    {
      type: "About us",
      subTypes: [
        "Careers",
        "Our Stores",
        "Our Cares",
        "Term's and Condition",
        "Privacy Policy",
      ],
    },
    {
      type: "Services",
      subTypes: [
        "Help Center",
        "How to  Buy",
        "Track your Order",
        "Return and Refunds",
        "Corporate & Bulk Purchasing",
      ],
    },
    {
      type: "Company",
      subTypes: ["About", "Terms", "Privacy Policy", "Careers"],
    },
    {
      type: "More",
      subTypes: ["Documentation", "License", "Changelog"],
    },
  ];
  const socialLinks = [
    <BsFacebook />,
    <BsInstagram />,
    <BsTwitter />,
    <BsLinkedin />,
  ];
  return (
    <footer className="py-3 mx-3">
      <div className="brand-container">
        <div className="brand">
          <span>Ashish</span>
          <span className="dot">.</span>
        </div>
        <p className="description">
          The best e-commerce platform on the web
        </p>

        <ul className="social-links">
          {socialLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
      <div className="links">
        {data.map(({ type, subTypes }, index) => {
          return (
            <div className="link" key={index}>
              <h3 className="title">{type}</h3>
              <ul>
                {subTypes.map((type, index) => (
                  <li key={index}>
                    <a href="#">{type}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;

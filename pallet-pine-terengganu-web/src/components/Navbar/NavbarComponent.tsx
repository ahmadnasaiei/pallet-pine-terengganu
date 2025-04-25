import React from "react";
import s from "./NavbarComponent.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTiktok } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const itemList = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About",
      link: "/about",
    },
    {
      id: 3,
      title: "Services",
      link: "/services",
    },
    {
      id: 4,
      title: "Product Gallery",
      link: "/product",
    },
    {
      id: 5,
      title: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <div className={s.mainContainer}>
      <div className={s.navContainer}>
        <div className={s.logoContainer}>
          <Link to="/" className={s.logo}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={s.itemContainer}>
          <ul>
            {itemList.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={s.buttonContainer}>
          <button className={s.button}>Request Quote</button>
          <a
            href="https://www.tiktok.com/@palletpineterengganu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} className={s.icon} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100049403323044"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} className={s.icon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

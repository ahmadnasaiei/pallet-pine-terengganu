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
      title: "Utama",
      link: "/",
    },
    {
      id: 2,
      title: "Profil",
      link: "/about",
    },
    {
      id: 3,
      title: "Servis",
      link: "/services",
    },
    {
      id: 4,
      title: "Galeri Produk",
      link: "/product-gallery",
    },
    {
      id: 5,
      title: "Hubungi",
      link: "/contact",
    },
  ];

  const leftItemList = itemList.slice(0, 3);
  const rightItemList = itemList.slice(3);

  return (
    <div className={s.mainContainer}>
      <div className={s.navContainer}>
        <div className={s.leftItemContainer}>
          <ul>
            {leftItemList.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={s.logoContainer}>
          <Link to="/" className={s.logoWrapper}>
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className={s.rightItemContainer}>
          <ul>
            {rightItemList.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              );
            })}
          </ul>
          <div className={s.socialContainer}>
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
    </div>
  );
}

export default Navbar;

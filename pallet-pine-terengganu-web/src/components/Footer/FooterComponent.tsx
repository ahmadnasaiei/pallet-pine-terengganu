import s from "./FooterComponent.module.css";
import logo from "../../assets/img/logo.jpg";
import Facebook from "../../assets/svg/facebook.svg?react";
import TikTok from "../../assets/svg/tiktok.svg?react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function FooterComponent() {
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
      link: "/product",
    },
    {
      id: 5,
      title: "Hubungi",
      link: "/contact",
    },
  ];

  return (
    <div className={s.mainContainer}>
      <div className={s.footerContainer}>
        <div className={s.footerContent}>
          <div className={s.footerLogo}>
            <img src={logo} alt="logo Pallet Pine Terengganu.jpg" />
          </div>
          <div className={s.contactDetails}>
            <h4>Hubungi</h4>
            <div className={s.contactInfo}>
              <p>
                <span>
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                +6014-332 5394
              </p>
              <p>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                palletpineterengganu01@gmail.com
              </p>
              <p>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                Jalan Tengku Ampuan Intan Zaharah, Kampung Wakaf Tengah,
                <br />
                21030 Kuala Terengganu, Terengganu
              </p>
              <p>
                <span>
                  <FontAwesomeIcon icon={faGlobe} />
                </span>
                <Link to="/">www.palletpineterengganu.com</Link>
              </p>
            </div>
          </div>

          <div className={s.centerCol}>
            <div className={s.operatingHours}>
              <h4>Waktu Beroperasi:</h4>
              <p>Sabtu - Khamis: 9 am—5:30 pm</p>
              <p>Jumaat/Cuti Umum: Tutup</p>
            </div>

            <div className={s.socialMedia}>
              <h4>Kami di Media Sosial</h4>
              <div className={s.socialMediaContainer}>
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100049403323044"
                >
                  <Facebook className={s.ico} /> Facebook
                </a>
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@palletpineterengganu"
                >
                  <TikTok className={s.ico} /> TikTok
                </a>
              </div>
            </div>
          </div>

          <div className={s.quickLinks}>
            <h4>Pautan Pantas</h4>
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
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;

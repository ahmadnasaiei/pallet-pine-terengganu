import s from "./HomePage.module.css";
import banner from "../../assets/img/banner.png";
import Ribbon from "../../assets/svg/designer.svg?react";

function HomePage() {
  return (
    <div className={s.mainContainer}>
      <div className={s.headerContainer}>
        <div className={s.headerTitle}>
          <h1>PALLET PINE TERENGGANU</h1>
          <h2>
            CUSTOM BY <span>DESIGNER</span>
          </h2>
          <Ribbon className={s.ribbon} />
          <div className={s.subTitle}>
            <p>PINEWOOD SUPPLY</p>
            <p>CUSTOM FURNITURE</p>
            <p>WOODWORKING</p>
          </div>
        </div>

        <div className={s.headerImg}>
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

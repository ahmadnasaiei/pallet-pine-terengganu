import s from "./FooterComponent.module.css";
import logo from "../../assets/img/logo.jpg";

function FooterComponent() {
  return (
    <div className={s.mainContainer}>
      <div className={s.footerContainer}>
        <div className={s.footerContent}>
          <div className={s.footerLogo}>
            <img src={logo} alt="logo Pallet Pine Terengganu.jpg" />
          </div>
          <div className={s.operationDetails}>
            <div>
              <span>Pallet Pine Terengganu</span>
              <p>
                Jalan Tengku Ampuan Intan Zaharah, Kampung Wakaf Tengah, 21030
                Kuala Terengganu, Terengganu
              </p>
            </div>
            <div>
              <span>Waktu Beroperasi</span>
              <p>
                Isnin: <span>9 am — 5:30 pm</span>
              </p>
              <p>
                Selasa: <span>9 am — 5:30 pm</span>
              </p>
              <p>
                Rabu: <span>9 am — 5:30 pm</span>
              </p>
              <p>
                Khamis: <span>9 am — 5:30 pm</span>
              </p>
              <p>
                Jumaat: <span>Tutup</span>
              </p>
              <p>
                Sabtu: <span>9 am — 5:30 pm</span>
              </p>
              <p>
                Ahad: <span>9 am — 5:30 pm</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;

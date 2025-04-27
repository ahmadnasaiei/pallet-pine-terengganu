import s from "./HomePage.module.css";
import banner from "../../assets/img/banner.png";
import Ribbon from "../../assets/svg/designer.svg?react";
import Button from "../../components/Button/ButtonComponent.tsx";
import Bullseye from "../../assets/svg/bullseye.svg?react";
import Worker from "../../assets/svg/worker.svg?react";
import Truck from "../../assets/svg/truck.svg?react";
import teamImg from "../../assets/img/team.jpg";
import { FaArrowCircleRight } from "react-icons/fa";

function HomePage() {
  return (
    <div className={s.mainContainer}>
      {/* HERO */}
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
          <div className={s.buttonContainer}>
            <Button
              label="Sebut Harga adalah Percuma!"
              route="/contact"
              icon={<FaArrowCircleRight />}
            />
          </div>
        </div>
        <div className={s.headerImg}>
          <img src={banner} alt="" />
        </div>
      </div>

      {/* CONTENT */}
      <div className={s.valueContainer}>
        <div className={s.outerContainer}>
          <div className={s.valueItems}>
            <Truck className={s.valueIcon} />
            <div>
              <span>Penghantaran Seluruh Malaysia</span>
              <p>Kami menghantar perabot impian anda terus ke pintu rumah.</p>
            </div>
          </div>
          <div className={s.valueItems}>
            <Bullseye className={s.valueIcon} />
            <div>
              <span>Kemasan Kerja Berkualiti</span>
              <p>
                Hasil kerja yang kemas dan berkualiti dari tukang berpengalaman
                kami.
              </p>
            </div>
          </div>
          <div className={s.valueItems}>
            <Worker className={s.valueIcon} />
            <div>
              <span>Pemasangan Percuma</span>
              <p>
                Membuat, menghantar, dan memasang adalah kerja kami. Anda hanya
                perlu duduk dan berehat!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={s.aboutContainer}>
        <div className={s.aboutContentWrapper}>
          <div className={s.aboutContent}>
            <div className={s.aboutImageContainer}>
              <img src={teamImg} alt="Pallet Pine Terengganu team" />
            </div>
            <div className={s.aboutText}>
              <h1>
                <span>Pallet Pine Terengganu</span> — Rekabentuk Perabot,
                Senibina Dalaman, Kabinet Dapur & Pembekal Kayu Pine
              </h1>
              <p>
                Selamat datang ke Pallet Pine Terengganu, pakar dalam
                menyediakan khidmat rekabentuk perabot, senibina dalaman,
                kabinet dapur, serta pembekalan kayu pine berkualiti tinggi.
                Berpusat di Jalan Wakaf Tengah, Kuala Terengganu, kami komited
                untuk membantu merealisasikan ruang idaman anda dengan hasil
                kerja tangan yang teliti dan penuh ketelitian. Sama ada anda
                mencari rekaan khas untuk kediaman, pejabat, mahupun projek
                komersial, Pallet Pine Terengganu sedia menjadi pilihan utama
                anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

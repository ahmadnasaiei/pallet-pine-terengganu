import s from "./HomePage.module.css";
import banner from "../../assets/img/banner.png";
import Ribbon from "../../assets/svg/designer.svg?react";
import Button from "../../components/Button/ButtonComponent.tsx";
import Bullseye from "../../assets/svg/bullseye.svg?react";
import Worker from "../../assets/svg/worker.svg?react";
import Truck from "../../assets/svg/truck.svg?react";
import { FaArrowCircleRight } from "react-icons/fa";
import {
  IMG_CAROUSEL,
  CLIENT_LOGO,
  CLIENT_FEEDBACK,
} from "../../constants/HomepageConstants.tsx";
import CarouselComponent from "../../components/Carousel/CarouselComponent.tsx";

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
            <p>PEMBEKAL KAYU PINE</p>
            <p>REKABENTUK PERABOT</p>
            <p>SENIBINA DALAMAN</p>
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

      <div className={s.aboutClientSection}>
        <div className={s.aboutBackground}></div>
        <div className={s.aboutContainer}>
          <div className={s.aboutContentWrapper}>
            <div className={s.aboutContent}>
              <div className={s.aboutImageContainer}>
                <CarouselComponent imgPath={IMG_CAROUSEL} />
              </div>
              <div className={s.aboutText}>
                <h1>
                  <span>Pallet Pine Terengganu</span> — Rekabentuk Perabot,
                  Senibina Dalaman, Kabinet Dapur & Pembekal Kayu Pine
                </h1>
                <div className={s.aboutDescription}>
                  <p>
                    Selamat datang ke Pallet Pine Terengganu, pakar dalam
                    menyediakan khidmat rekabentuk perabot, senibina dalaman,
                    kabinet dapur, serta pembekalan kayu pine berkualiti tinggi.{" "}
                  </p>
                  <p>
                    Berpusat di Jalan Wakaf Tengah, Kuala Terengganu, kami
                    komited untuk membantu merealisasikan ruang idaman anda
                    dengan hasil kerja tangan yang teliti dan penuh ketelitian.
                    Sama ada anda mencari rekaan khas untuk kediaman, pejabat,
                    mahupun projek komersial, Pallet Pine Terengganu sedia
                    menjadi pilihan utama anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OUR CLIENT */}
        <div className={s.clientContainer}>
          <div className={s.clientContent}>
            <div className={s.dotDivContainer}>
              <div className={s.dotDiv}></div>
              <div className={s.dotDiv}></div>
              <div className={s.dotDiv}></div>
            </div>
            <div className={s.clientTitle}>
              <h1>Hasil Kerja Yang Dipercayai Ramai</h1>
              <p>
                Kesemua pelanggan kami datang dari pelbagai latar belakang.
                Kepercayaan yang diberikan oleh anda adalah tanggungjawab kami
                dalam memastikan hasil kerja yang berkualiti tinggi dan bermutu.
              </p>
            </div>
            <div className={s.clientLogoContainer}>
              {CLIENT_LOGO.map((item) => (
                <div key={item.id} className={s.clientLogo}>
                  <img src={item.imgPath} alt={item.alt} key={item.id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FEEDBACK */}
      <div className={s.feedbackContainer}>
        <div className={s.feedbackContent}>
          <div className={s.feedbackTitle}>
            <h1>Maklum Balas Pelanggan</h1>
            <p>
              Kami mempunyai ramai pelanggan yang berpuas hati dengan hasilnya.
              Berikan kepercayaan anda dalam merealisasikan impian deko rumah
              anda kepada kami. Jangan hanya dengar dari kami, dengar apa kata
              pelanggan kami!
            </p>
          </div>
          <div className={s.feedbackCard}>
            {CLIENT_FEEDBACK.map((item) => {
              const initials = item.name
                .split(" ")
                .slice(0, 2)
                .map((word) => word.charAt(0).toUpperCase())
                .join("");

              const bgColor = `${item.profileColor}`;

              return (
                <div className={s.feedbackCardItem} key={item.id}>
                  <div className={s.feedbackHeader}>
                    <span style={{ backgroundColor: bgColor }}>{initials}</span>
                    <div>
                      <p>{item.name}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <div className={s.feedbackDesc}>
                    <p>{item.feedback}</p>
                  </div>
                  <div className={s.feedbackDate}>
                    <p>{item.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

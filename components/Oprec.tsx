import Image from "next/image";
import Modals from "./Modal";
import decor from "../public/assets/lineDecor.png";
import location from "../public/assets/location.png";
import logoSAA from "../public/assets/LOGOSAA.png";
import textDecor from "../public/assets/text_decor.png";
import listDivisi from "./data/listDivisi";
import styles from "../styles/oprec.module.css";
import textDecorKiri from "../public/assets/textDecorKiri.png";
import textDecorKanan from "../public/assets/textDecorKanan.png";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";


const Oprec = (props) => {

  function disableScroll() {
    // Get the current scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
    // Set the body's position fixed and adjust the scroll position to maintain the current visible content
    document.body.style.overflow = 'hidden';
    // document.body.style.position = 'fixed';
    document.body.style.height = '1100px';
    // document.body.style.top = `-${scrollPosition}px`;
  }

  // function enableScroll() {
  //   // Restore the body's position and scroll position
  //   const scrollPosition = Math.abs(parseInt(document.body.style.top || '0', 10));
  //   document.body.style.overflow = '';
  //   document.body.style.position = '';
  //   document.body.style.top = '';
  //   window.location.href="#0";
  // }
  
  
  const isScreenSmall = useMediaQuery({ maxWidth: 720});
  const isScreenMedium = useMediaQuery({ maxWidth: 1024});
  const isScreenLarge = useMediaQuery({ maxWidth: 1440});

  function renderDivisi(list,index) {
    // {console.log(list.id)}
    return (
      <div className={styles.divisionBox} onClick={props.handleModalOpen} id={index}>
        <Image  src={list.img} 
          width={200} 
          height={200} 
          alt="" 
          id={index}
        />
        {/* <h1 id={index}>{list.nama}</h1> */}
        {/* <p id={index}>{list.ket}</p> */}
        {/* Isi Modals */}

      </div>
    );
  }
  return (
    <div className={[styles.oprecSection, styles.container].join(" ")}>
      <div className={styles.oprecHeader}>
        .
        <Image
          src={decor}
          height={22.5}
          style={{
            width: "56vw",
            height: "auto",
            marginTop: "50px",
          }}
          alt=""
        />
        <h1 style={{ textAlign: "center" }}>OPEN RECRUITMENT</h1>
        <p style={{ textAlign: "center" }}>
          OPEN RECRUITMENT DIMULAI DARI TANGGAL 19 - 26 MEI 2023 <br /> PUKUL
          23:59 WIB AJA LOH!
        </p>
        <br />
      </div>
      {/* Open Recruitment, Locatan and Data============================================== */}
      <div className={styles.oprecLocAndDate}>
        <div className={styles.oprecLoc}>
          <Image
            src={location}
            width={isScreenSmall ? 25 : 52}
            height={isScreenSmall ? 35 : 72}
            alt=""
          />
          <div>
            <h1>Booth Oprec 3</h1>
            <p>Connector gedung C & D</p>
          </div>
        </div>
        <div className={styles.oprecDate}>
          <h1>22 May - 26 May 2023 </h1>
        </div>
      </div>
      <div className={styles.oprecDivision}>
        <h1 style={{ textAlign: "center" }}>Choose Your Division</h1>
        <div className={[styles.listDivision].join(" ")}>
          {listDivisi.map(renderDivisi)}
        </div>
      </div>
      <p
        style={{
          fontSize: isScreenSmall ? "16px" : "22px",
          width: isScreenSmall ? "80%" : "60%",
          margin: "40px auto",
          textAlign: "center",
        }}
      >
      </p>
      <div className={styles.oprecDaftarButton}>
        <Image
          src={textDecorKiri}
          width={isScreenSmall ? 90 : 120}
          height={isScreenSmall ? 70 : 90}
          alt=""
        />
        <a href=" https://bit.ly/OprecSAA2023" target="_blank">
          <button className={styles.buttonDaftar}>
              <p>Join Now</p>
          </button>
        </a>
        <Image
          src={textDecorKanan}
          width={isScreenSmall ? 90 : 120}
          height={isScreenSmall ? 70 : 90}
          alt=""
        />
      </div>
    </div>
  );
};

export default Oprec;

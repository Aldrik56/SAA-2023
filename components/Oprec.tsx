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


const Oprec = () => {

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
    const [modalOpen, setModalOpen] = useState(false);
    const [indexModal, setIndexModal] = useState(0);

    function handleModalOpen(event) {
      // disableScroll();
      setIndexModal(event.target.id);
      setModalOpen(true);
    };

    const handleModalClose = (event) => {
      // enableScroll();
      console.log(event.target.id)
      setModalOpen(false);
    };

  function renderDivisi(list,index) {
    // {console.log(list.id)}
    return (
      <div className={styles.divisionBox} onClick={handleModalOpen} id={index}>
        <Image  src={list.img} width={200} height={200} alt="" id={index}/>
        <h1 id={index}>{list.nama}</h1>
        <p id={index}>{list.ket}</p>
        {/* Isi Modals */}
        <Modals isOpen={modalOpen} onClose={handleModalClose} >
          {/* {console.log(index)} */}
          <div className={styles.modalContainer}>
            {/* nama divisi */}
            <h2>{list.nama}</h2>
            {/* Logo Divisi */}
            <Image src={listDivisi[indexModal].img} width={200} height={200} alt="" />
            {/* Rencana list.modal isi dari penjelasan divisi */}
            <p>{list.modal}</p>
            <p>Modal Content</p>
            <button onClick={handleModalClose}>Close</button>
          </div>
        </Modals>
      </div>
    );
  }
  return (
    <div className={styles.oprecSection}>
      <div className={styles.oprecHeader}>
        .
        <Image
          src={decor}
          height={42}
          style={{ width: "82.42% !important" }}
          alt=""
        />
        <h1>OPEN RECRUITMENT</h1>
        <p
          style={{ margin: "40px 50px", fontSize: "22px", textAlign: "center" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam!
        </p>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              margin: "5px 20px 20px 30px",
            }}
          >
            <h1>Booth Oprec 3</h1>
            <p>Connector gedung C & D</p>
          </div>
        </div>
        <div className={styles.oprecDate}>
          <h1>22 May - 26 May 2023 </h1>
        </div>
      </div>
      <div className={[styles.oprecDivision, styles.container].join(" ")}>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam!!!
      </p>
      <div className={styles.oprecDaftarButton}>
        <Image
          src={textDecorKiri}
          width={isScreenSmall ? 100 : 100}
          height={isScreenSmall ? 72 : 144}
          alt=""
        />
        <button className={styles.buttonDaftar}>Coming Soon</button>
        <Image
          src={textDecorKanan}
          width={isScreenSmall ? 100 : 100}
          height={isScreenSmall ? 72 : 144}
          alt=""
        />
      </div>
    </div>
  );
};

export default Oprec;

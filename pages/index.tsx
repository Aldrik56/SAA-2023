import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Oprec from '../components/Oprec';
import Image from "next/image";
import Header from '../components/Header';
import Teaser from '../components/Teaser';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Modal2 from '../components/Modal2';
import { useState } from "react";
export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
    const [indexModal, setIndexModal] = useState(0);

    function handleModalOpen(event) {
      // disableScroll();
      document.getElementById("navbar").style.display="none";
      setIndexModal(event.target.id);
      setModalOpen(true);
    };

    const handleModalClose = (event) => {
      // enableScroll();
      document.getElementById("navbar").style.display="";
      console.log(event.target.id)
      setModalOpen(false);
    };

  return (
    <div className={styles.container}>
      <Head>
        <title>SAA UMN 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar />/ */}
      <Header />
      <Teaser/>
      <AboutUs/>
      <Oprec
        handleModalOpen={handleModalOpen}
      />
      <Modal2
        isOpen={modalOpen}
        indexModal={indexModal}
        handleModalClose={handleModalClose}
      />
      <>
        <Footer />
      </>

    </div>
  );
}

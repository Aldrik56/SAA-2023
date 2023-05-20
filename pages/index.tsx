import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Oprec from '../components/Oprec';
import Image from "next/image";
import Header from '../components/Header';
import Teaser from '../components/Teaser';
import AboutUs from '../components/AboutUs';

import Footer from '../components/Footer';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SAA UMN 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Teaser/>
      <AboutUs/>
      <Oprec/>


      <Footer />
    </div>
  );
}

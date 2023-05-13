import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Oprec from '../components/Oprec';


import Footer from '../components/Footer';
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>SAA UMN 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Oprec />


      <Footer />
    </div>
  )
}
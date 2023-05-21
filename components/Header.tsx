import React from 'react';
import styles from '../styles/Header.module.css';


const Header = () => {
    return (
      <>
      <div className={styles.backgroundImage}></div>
      <div className={styles.backgroundImage2}></div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/assets/LOGOSAA.png" alt="logo" />
        </div>
        <div className={styles.title} style={{ margin: 0 }}>
          <p>
            Student
            <br />
            Association
            <br />
            Awards
            <br />
            2023
          </p>
        </div>
        <div className={styles.icons} >
          <div className={styles.icon}>
            <img src="/assets/umn_1.png" alt="instagram" />
          </div>
          <div className={styles.icon}>
            <img src="/assets/logoBEM.png" alt="email" />
          </div>
          {/* <div className={styles.iconHotel}>
            <img src="/assets/hotel.png" alt="facebook" />
          </div> */}
        </div>
      </div>
      </>
    );
}

export default Header;
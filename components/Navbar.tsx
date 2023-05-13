import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
                <div className={styles.navbarLogo}>SAA 2023</div>
                
                <ul className={styles.navbarPaths}>
                
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#">ABOUT</a>
                    </li>
                    <li>
                        <a href="#">OPREC</a>
                    </li>
                </ul>
        </div>
      </nav>
    );
};

export default Navbar;
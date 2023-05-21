import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
      <div className={styles.navbar} id="navbar">
        <div className={styles.navbarContainer}>
                <div className={styles.navbarLogo}>SAA 2023</div>
                <nav>
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
                </nav>
        </div>
      </div>
    );
};

export default Navbar;
import styles from '../styles/Footer.module.css';

const Footer = () =>{
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSocial}>
            <div className={styles.footerSocialTitle}>YOU CAN FIND US ON:</div>
            <div className={styles.footerSocialLinks}>
              <a href="#" className={styles.footerSocialLink}>
                <img src="/assets/instagram.png" alt="instagram" />
              </a>
              <a href="#" className={styles.footerSocialLink}>
                <img src="/assets/email.png" alt="email" />
              </a>
              <a href="#" className={styles.footerSocialLink}>
                <img src="/assets/facebook.png" alt="facebook" />
              </a>
              <a href="#" className={styles.footerSocialLink}>
                <img src="/assets/tiktok.png" alt="tiktok" />
              </a>
            </div>
            <div className={styles.footerCredit}>
                <div className={styles.footerCreditText1}>@Student Association Awards 2023</div>
                <div className={styles.footerCreditText2}>Website Managed by Triomphe Division</div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
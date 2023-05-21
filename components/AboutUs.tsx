import styles from '../styles/AboutUs.module.css';
import Image from 'next/image';
import decor from '../public/assets/lineDecor.png';
import { useMediaQuery } from 'react-responsive';
const AboutUs = () => {
    const isScreenSmall = useMediaQuery({ maxWidth: 721 });

    return (
      <div className={styles.container}>
        <div className={styles.aboutUs}>
          <Image
            src={decor}
            // height={isScreenSmall ? 22 : 42}
            alt=""
          />
          <h4>About Us</h4>
          <p>
          SAA 2023 merupakan kegiatan yang berada dibawah naungan BEM UMN, kegiatan SAA hadir sebagai bentuk apresiasi kepada semua himpunan yang telah bekerja keras selama satu periode masa jabatannya di UMN
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.contentText}>
            <h6>CONCEPT</h6>
            <h4>LUXURIOUS PARISIAN NIGHT</h4>
            <p>
            Kemewahan, kemegahan dan indahnya gemerlap-gemerlip Kota Paris sebagai kota cinta menjadi inspirasi konsep bagi Student Association Awards 2023✨

Konsep tersebut diharkan mampu melambangkan setiap mahasiswa UMN yang menaruh sepenuh hatinya dan tanggung jawab untuk himpunannya serta nilai-nilai diantara mahasiswa dan himpunan.
            </p>
          </div>
          <div className={styles.contentText}>
            <h6>THEME</h6>
            <h4>GLOW IN TRIUMPHANCE</h4>
            <p>
            Melalui tema Glow in Triumphance ini, SAA 2023 menekankan penghargaan sebagai penerangan atas kemenangan gemilang yang diraih oleh himpunan. Diharapkan nantinya tema ini dapat meninggalkan kesan memorable bagi para himpunan ✨.
            </p>
          </div>
          <div className={styles.contentText}>
            <h6>TAGLINE</h6>
            <h4>Sparkle with Spirit, Inspire the Merit</h4>
            <p>
            Diangkatnya tagline SAA 2023 menggambarkan bahwa setiap himpunan memancarkan cahaya mereka masing-masing yang akan menginspirasi himpunan lainnya untuk bisa ikut bertumbuh.
            </p>
          </div>
        </div>
      </div>
    );
}

export default AboutUs;
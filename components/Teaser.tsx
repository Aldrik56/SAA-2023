import decor from '../public/assets/lineDecor.png';
import Image from 'next/image';
import styles from '../styles/Teaser.module.css';
import { useMediaQuery } from "react-responsive";


const Teaser=()=> {
    const isScreenSmall = useMediaQuery({ maxWidth: 721 });
    const handleClick =(event)=>{
        console.log(event.target.id)
    }
    return (
      <div className={styles.teaserSection}>
        <div className={styles.teaserHeader}>
          <Image
            src={decor}
            height={isScreenSmall ? 22 : 42}
            style={{
              width: "82.42% !important",
              marginTop: "50px",
            }}
            alt=""
          />
          <h1 onClick={handleClick} id="goblok">OUR TEASER VIDEO</h1>
        </div>
        <div  className={styles.teaserVideo}>
          <iframe
            style={{ width: "56.6vw", height: "30vw" }}
            src="https://www.youtube.com/embed/GftT_wzRJdc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>
        </div>
      </div>
    );
}

export default Teaser;
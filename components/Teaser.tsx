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
      <div className={[styles.teaserSection, styles.container].join(" ")}>
        <div className={styles.teaserHeader}>
          <Image
            src={decor}
            // height={isScreenSmall ? 18 : 42}
            alt=""
          />
          <h1 onClick={handleClick} id="goblok">OUR TEASER VIDEO</h1>
        </div>
        <div  className={styles.teaserVideo}>
          
          <iframe
            src="https://www.youtube.com/embed/URJy7yC24tE"
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
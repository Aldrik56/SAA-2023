import Image from 'next/image';
import decor from '../public/assets/lineDecor.png';
import location from '../public/assets/location.png';
import logoSAA from '../public/assets/LOGOSAA.png';
import listDivisi from './data/listDivisi';
import { Center, Square, Circle } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import styles from '../styles/oprec.module.css';

const Oprec =()=>{
    function renderDivisi(list){
        return(
            <div className={styles.divisionBox}>
                <Image src={logoSAA} width={200} height={200} alt=""/>
                <h1>{list.nama}</h1>
                <p>{list.ket}</p>
            </div>
        );
    }
    return(
        <div className={styles.oprecDiv}>
            <div className={styles.oprecHeader}>.
                <Image src={decor} width={740} height={42} alt=""/>
                <h1>Open Recruitment</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
            </div>
            <div className={styles.oprecLocAndDate}>
                <div className={styles.oprecLoc}>
                    <Image src={location} width={52} height={72} alt=""/>
                    <div>
                        <h1>Booth Oprec 3</h1>
                        <p>Connector gedung C & D</p>
                    </div>
                </div>
                <div className={styles.oprecDate}>
                    <h1>22 May - 26 May 2023 </h1>
                </div>
            </div>
            <div className={[styles.oprecDivision, styles.container].join(' ')}>
                <h1>Choose dddddd</h1>
                <div className={[styles.listDivision,styles.container].join(' ')}>
                    {listDivisi.map(renderDivisi)}
                </div>
            </div>
        </div>

    );
}

export default Oprec;
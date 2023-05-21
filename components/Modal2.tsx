import Modals from "./Modal";
import styles from "../styles/Modal.module.css";
import listDivisi from "./data/listDivisi";
import Image from "next/image";
import { useState } from "react";

const Modal2 = (props)=> {
    const [modalOpen, setModalOpen] = useState(false);
    const [indexModal, setIndexModal] = useState(0);

    function handleModalOpen(event) {
      // disableScroll();
      setIndexModal(event.target.id);
      setModalOpen(true);
    };

    const handleModalClose = (event) => {
      // enableScroll();
      console.log(event.target.id)
      setModalOpen(false);
    };
    return(
        <Modals isOpen={props.isOpen} onClose={props.handleModalClose} >
          {/* {console.log(index)} */}
          <div className={styles.modalContainer}>
            <Image src={listDivisi[props.indexModal].img} width={300} height={300} alt="" />
            <p>{listDivisi[props.indexModal].deskripsi}</p>
            <button onClick={props.handleModalClose}>Close</button>
            
          </div>
        </Modals>
    );
}

export default Modal2;
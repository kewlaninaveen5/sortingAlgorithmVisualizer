import {React, useState} from 'react'
import  './InstructionsManual.css';

function InstructionsManual() {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const modalToggleHandler = () => {
        const oldState = isModalOpen;
        setIsModalOpen(!oldState)
    } 

    const styles =  {
         modalContainer : {
            position: "absolute",
            display: "flex",
            zIndex: "1",
            top: "0px",
            left: isModalOpen? "0vw" : "-20vw",
            height: "100vh",
            width: "26vw",
            transition: "1000ms",
            // backgroundColor: isModalOpen? "rgba(40,44,52, 1)" : "rgba(40,44,52, 0.5)",
        },
        
        modal: {
            // display: isModalOpen? "inline-block" : "none",
            width: "20vw",
            backgroundColor: "#ffcccc",
            transition: "1000ms",
        },
        
        modalToggleButton: {
            width: "6vw",
            transition: "1000ms",
            backgroundColor: "#ffcccc",
            border: "none",
            borderRadius: "0px 10px 10px 0px",
            marginTop: "200px",
            height: "50px",
        }
    }

    // const manual = <div className={"modal-container"}>
    const manual = <div style={styles.modalContainer}>
        <div style={styles.modal}>
            Hariom
        </div>
        <button onClick={() => modalToggleHandler()} style={styles.modalToggleButton}>
            {isModalOpen ? <div>Close</div> : <div>Instructions</div>}
        </button>
    </div>



  return (
    <div>
        {manual}
    </div>
  )
}



export default InstructionsManual
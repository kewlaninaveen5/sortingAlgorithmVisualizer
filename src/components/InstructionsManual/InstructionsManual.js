import {React, useState} from 'react'
import  './InstructionsManual.css';

function InstructionsManual() {

    const { innerWidth: width, innerHeight: height } = window;
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
            left: width > 768 ? isModalOpen? "0vw" : "-20vw" : isModalOpen? "0vw" : "-57vw"  ,
            height: "100vh",
            width: width > 768 ? "26vw" : "76vw",
            transition: "1000ms",
            // backgroundColor: isModalOpen? "rgba(40,44,52, 1)" : "rgba(40,44,52, 0.5)",
        },
        
        modal: {
            // display: isModalOpen? "inline-block" : "none",
            width: width > 768 ? "20vw" : "70vw",
            backgroundColor: "#ffcccc",
            transition: "1000ms",
        },
        
        modalToggleButton: {
            width: "80px",
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
           Add Instructions here in the end.
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
import {React, useState} from 'react'
import  './InstructionsManual.css';

function InstructionsManual() {

    const { innerWidth: width} = window;
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
            marginTop: "500px",
            height: "50px",
        }
    }

    // const manual = <div className={"modal-container"}>
    const manual = <div style={styles.modalContainer}>
        <div style={styles.modal}>
            <div className="instructions-text">

           <div className="instructions-title">Instructions to Use</div>
           <ul>
            <li className="instructions-list-item">
           This program is a <b>
            Visualization of how the Sorting Algorithms work in the real world.
            </b>
            </li>
            <li className="instructions-list-item">
           To get started, <br/> <span style={{fontSize: "28px"}} >Choose Array Size</span> <br/> (or collection of numbers) you want to sort by entering it in the given input field. I would suggest to go for the maximum size that is 132.
            </li>
            <li className="instructions-list-item">
           Press the <span className="instructions-button">Generate Random Array</span> button to generate the array. 
            </li>
            <li className="instructions-list-item">
           Choose the speed at which you want the visualiser to run with the <span className="instructions-button">Choose Speed</span> input.
           The <span className="instructions-button">Minimum</span> speed is 1 second and the <span className="instructions-button">Maximum</span> speed is 5 milliseconds.
            </li>
            <li className="instructions-list-item">
           To start sorting, just click on the desired sorting button.<br/> (<span className="instructions-button-disabled">Merge Sort</span> is currently under Development)
            </li>
            <li className="instructions-list-item">
           You can stop the sorting midway with the <span className="instructions-button">Stop Sorting</span> button
            </li>
           </ul>
            
            </div>
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
import { React, useState, useEffect, useRef } from 'react'
import './App.css';
import InstructionsManual from './components/InstructionsManual/InstructionsManual';
import Graph from "./components/Graph/Graph.js";

const App = () => {

  const renderCount = useRef(0);
  const barRef = useRef(null)


  const [inputArray, setInputArray] = useState([]);
  const [lenghtOfArray, setLenghtOfArray] = useState(52);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [sorting, setSorting] = useState(false);
  const [swapCounter, setSwapCounter] = useState(0);
  const [delay, setDelay] = useState(5);

  useEffect(() => {
    renderCount.current += 1;
  });
  useEffect(() => {
    const initialSize = lenghtOfArray
    generateRandomArray(initialSize)
  }, []);

  useEffect(() => {
    if (sorting) {
      setTimeout(() => {
        let oldArray = [...inputArray]
        let i1 = i, j1 = j;
        console.log("usee ran once")
        for (i1; i1 < (oldArray.length - 1); i1++) {

          for (j1; j1 < (oldArray.length - i1 - 1); j1++) {
            const firstNode = barRef.current.children[j1]
            const secondNode = barRef.current.children[j1 + 1]
            firstNode.style.backgroundColor = "red"
            secondNode.style.backgroundColor = "red"

            if (oldArray[j1] > oldArray[j1 + 1]) {
              // firstNode.style.backgroundColor = "turquoise"
              // secondNode.style.backgroundColor = "turquoise"
              const oldSwapCount = swapCounter;
              // const oldState = [...oldArray]
              const firstElementValue = oldArray[j1]
              oldArray[j1] = oldArray[j1 + 1]
              oldArray[j1 + 1] = firstElementValue
              setSwapCounter(oldSwapCount + 1);
              setJ(j1)
              setI(i1);
              setInputArray(oldArray);
              return
            }
            firstNode.style.backgroundColor = "#8888ff"
            secondNode.style.backgroundColor = "#8888ff"
            // setJ(j => j+1);
          }
          j1 = 0;
        }

        const nodes = barRef.current.children
        for (let n = 0; n < nodes.length; n++) {
          nodes[n].style.backgroundColor = "#99c234"
        }
        // barRef.current.children
        setSorting(false);
      }, delay);
    }
  }, [i, j, inputArray, swapCounter, sorting]);

  const lengthOfArrayHandler = (e) => {
    let v = parseInt(e.target.value);
    console.log(v);
    setLenghtOfArray(v)
    // max array length = 132
  }

  const changeSpeedHandler = (e) => {
    console.log(e.target.value)
    setDelay(500 / e.target.value)
  }

  const generateRandomArray = (max) => {
    if (lenghtOfArray >= 5 && lenghtOfArray <= 132) {
      let length = lenghtOfArray;
      const newArray = Array.from({ length }, () => Math.floor(Math.random() * max) + 6);
      setInputArray(newArray)
      setSwapCounter(0)
      const nodes = barRef.current.children
      for (let n = 0; n < nodes.length; n++) {
        nodes[n].style.backgroundColor = "#8888ff"
      }
    }
    else {
      alert("Please Use a value between 5 and 132 (both inclusive)")
      setLenghtOfArray(132)
    }
  }

  const stopSortingHandler = () => {
    setSorting(false)
  }

  const bubbleSort = () => {
    setSorting(true)
    setI(0);
    setJ(0);
  }

  return (
    <div className="page-container">
      <div>
        <InstructionsManual />
      </div>

      <div>
        <h1>Sorting Algorithm Visualizer</h1>
        <Graph delay={delay} ref={barRef} array={inputArray} />
        <h1>Total Page Renders: {renderCount.current}</h1>
        <div>
          Total Number of Swaps in last sort : {swapCounter}
        </div>

      </div>


      <div>
        <div className={"details-container"}>
          <div className="choose-array-size">
            <div>Choose array size</div>
            <div className={"small-text"}>(Choose a number between 5 and 132 both Inclusive)</div>
          </div>
          <input placeholder="ENTER ARRAY LENGTH" className="array-length-input" type="number" id="lengthInput" value={lenghtOfArray.toString()} onChange={(e) => lengthOfArrayHandler(e)} />
          <button disabled={sorting ? true : false} className="button" onClick={() => generateRandomArray(130, 4000)}>
            Generate random array
          </button>
          <button disabled={sorting ? true : false} className="button" onClick={() => bubbleSort()}>
            start bubble sort
          </button>
          <button disabled={sorting ? true : false} className="button" onClick={() => bubbleSort()}>
            start Selection sort
          </button>
          <button disabled={sorting ? true : false} className="button" onClick={() => bubbleSort()}>
            start Merge sort
          </button>
          <button disabled={sorting ? true : false} className="button" onClick={() => bubbleSort()}>
            start Insertion sort
          </button>
          <button disabled={sorting ? true : false} className="button" onClick={() => bubbleSort()}>
            start Quick sort
          </button>

          <div className="input-range button">
            <div>Choose Speed: </div>
            <input
              type="range"
              // ref="inputRangeRef" 
              onChange={(e) => changeSpeedHandler(e)}
              className="input-range__slider"
              min="1"
              max="100"
              step="0.1"
              defaultValue="100"
            />
            <div className="min-max-container">
            <div>Min</div>
            <div>Max</div>
            </div>
          </div>
          <button disabled={sorting ? false : true} className="button" onClick={() => stopSortingHandler()}>
            Stop Sorting
          </button>



        </div>
      </div>


    </div>
  );
}

export default App;

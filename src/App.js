import { React, useState, useEffect, useRef } from 'react'
import './App.css';
import InstructionsManual from './components/InstructionsManual/InstructionsManual';
import Graph from "./components/Graph/Graph.js";

const App = () => {

  const renderCount = useRef(0);
  const barRef = useRef(null)


  const [inputArray, setInputArray] = useState([12,5,7,13,5,78,92,4]);
  const [lenghtOfArray, setLenghtOfArray] = useState(52);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [sortType, setSortType] = useState("");
  const [sorting, setSorting] = useState(false);
  const [swapCounter, setSwapCounter] = useState(0);
  const [delay, setDelay] = useState(5);
  const [specialStoredValue, setSpecialStoredValue] = useState(0);

  const BUBBLE_SORT = "BUBBLE SORT"
  const SELECTION_SORT = "SELECTION SORT"
  // const MERGE_SORT = "MERGE SORT"
  const INSERTION_SORT = "INSERTION SORT"
  // const QUICK_SORT = "QUICK SORT"



  useEffect(() => {
    renderCount.current += 1;
  });


  useEffect(() => {
    if (sorting && sortType === BUBBLE_SORT) {
      setTimeout(() => {
        let oldArray = [...inputArray]
        let i1 = i, j1 = j;
        for (i1; i1 < (oldArray.length - 1); i1++) {
          for (j1; j1 < (oldArray.length - i1 - 1); j1++) {
            const firstNode = barRef.current.children[j1]
            const secondNode = barRef.current.children[j1 + 1]
            firstNode.style.backgroundColor = "red"
            secondNode.style.backgroundColor = "red"
            if (oldArray[j1] > oldArray[j1 + 1]) {
              const oldSwapCount = swapCounter;
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
          }
          j1 = 0;
        }
        const nodes = barRef.current.children
        for (let n = 0; n < nodes.length; n++) {
          nodes[n].style.backgroundColor = "#99c234"
        }
        setSorting(false);
        setSortType("")
      }, delay);
    }
  }, [i, j, inputArray, swapCounter, sorting, sortType, delay]);

  useEffect(() => {
    if (sorting && sortType === SELECTION_SORT) {
      setTimeout(() => {
        let oldArray = [...inputArray]
        let i1 = i, j1 = j;
        barRef.current.children[oldArray.length-1].style.backgroundColor = "#8888ff";
        if (i1 < (oldArray.length - 1)) {
          let indexAtMinimumValue = specialStoredValue;
          const firstNode = barRef.current.children[i1]
          firstNode.style.backgroundColor = "blue"
          if (j1 < (oldArray.length))
            {
          if (i1 === j1 -1 )
            barRef.current.children[j1-1].style.backgroundColor = "blue";
          else if (indexAtMinimumValue === j1-1)
            barRef.current.children[j1-1].style.backgroundColor = "green";
          else barRef.current.children[j1-1].style.backgroundColor = "#8888ff";
            const secondNode = barRef.current.children[j1]
            secondNode.style.backgroundColor = "pink"
            if (oldArray[indexAtMinimumValue] > oldArray[j1]) {
              if (indexAtMinimumValue !== i1){
                barRef.current.children[indexAtMinimumValue].style.backgroundColor = "#8888ff";
              }
                indexAtMinimumValue = j1;
                barRef.current.children[j1].style.backgroundColor = "green";
                setSpecialStoredValue(j1);
            }
            setJ(j1 + 1)
            return
          }
          if (indexAtMinimumValue !== i1) {
            const oldSwapCount = swapCounter;
            setSwapCounter(oldSwapCount + 1);
          }
          const firstElementValue = oldArray[i1];
          oldArray[i1] = oldArray[indexAtMinimumValue];
          oldArray[indexAtMinimumValue] = firstElementValue;
          if (indexAtMinimumValue !== i1)
          barRef.current.children[indexAtMinimumValue].style.backgroundColor = "#8888ff";
          setI(i1 + 1);
          setSpecialStoredValue(i1+1)
          setJ(i1 + 2)
          setInputArray(oldArray);
          return
        }
        const nodes = barRef.current.children
        for (let n = 0; n < nodes.length; n++) {
          nodes[n].style.backgroundColor = "#99c234"
        }
        // barRef.current.children
        setSorting(false);
        setSortType("")
      }, delay);
    }
  }, [i, j, inputArray, swapCounter, sorting, sortType, delay, specialStoredValue]);

  useEffect(() => {
    if (sorting && sortType === INSERTION_SORT) {
      setTimeout(() => {
        let oldArray = [...inputArray];
        let i1 = i;
        let j1 = j;

        if (i1 < oldArray.length) {
          if (j1 !== -1) barRef.current.children[j1].style.backgroundColor = "pink"; 
          barRef.current.children[i1].style.backgroundColor = "red";
          let key = specialStoredValue > 0 ? specialStoredValue : oldArray[i1];
          if (j1 >= 0 && oldArray[j1] > key){
            if (j1+1 !== i1)
            barRef.current.children[j1+1].style.backgroundColor = "pink";
            barRef.current.children[j1].style.backgroundColor = "green";
            oldArray[j1+1] = oldArray[j1];
            setJ(j1 -1);
            setInputArray(oldArray);
            setSpecialStoredValue(key);
            
            return;
          }
          j1 === -1 ? oldArray[0] = key : oldArray[j1+1] = key;
          barRef.current.children[j1+1].style.backgroundColor = "pink";
          setI(i1 + 1)
          setSpecialStoredValue(0)
          setJ(i1)
          setInputArray(oldArray)
          return
        }

        // for (i1; i1 < oldArray.length; i1++){
        //   let temp, key = oldArray[i1]
        //   while (j1 >= 0 && oldArray[j1] > key) {
        //     oldArray[j1+1] = oldArray[j1]
        //     j1 = j1-1
        //   }
        //   oldArray[j1] = key;
        // }


        // barRef.current.children[oldArray.length-1].style.backgroundColor = "#8888ff";
        // if (i1 < (oldArray.length - 1)) {
        //   let indexAtMinimumValue = specialStoredValue;
        //   // const firstNode = barRef.current.children[i1]
        //   // firstNode.style.backgroundColor = "blue"
        //   if (j1 < (oldArray.length))
        //     {
        //   if (i1 === j1 -1 )
        //     barRef.current.children[j1-1].style.backgroundColor = "blue";
        //   else if (indexAtMinimumValue === j1-1)
        //     barRef.current.children[j1-1].style.backgroundColor = "green";
        //   else barRef.current.children[j1-1].style.backgroundColor = "#8888ff";
        //     const secondNode = barRef.current.children[j1]
        //     secondNode.style.backgroundColor = "pink"
        //     if (oldArray[indexAtMinimumValue] > oldArray[j1]) {
        //       if (indexAtMinimumValue !== i1){
        //         barRef.current.children[indexAtMinimumValue].style.backgroundColor = "#8888ff";
        //       }
        //         indexAtMinimumValue = j1;
        //         barRef.current.children[j1].style.backgroundColor = "green";
        //         setSpecialStoredValue(j1);
        //     }
        //     setJ(j1 + 1)
        //     return
        //   }
        //   if (indexAtMinimumValue !== i1) {
        //     const oldSwapCount = swapCounter;
        //     setSwapCounter(oldSwapCount + 1);
        //   }
        //   const firstElementValue = oldArray[i1];
        //   oldArray[i1] = oldArray[indexAtMinimumValue];
        //   oldArray[indexAtMinimumValue] = firstElementValue;
        //   if (indexAtMinimumValue !== i1)
        //   barRef.current.children[indexAtMinimumValue].style.backgroundColor = "#8888ff";
        //   setI(i1 + 1);
        //   setSpecialStoredValue(i1+1)
        //   setJ(i1 + 2)
        //   setInputArray(oldArray);
        //   return
        //   j1 = 0;
        // }
        const nodes = barRef.current.children
        for (let n = 0; n < nodes.length; n++) {
          nodes[n].style.backgroundColor = "#99c234"
        }
        // barRef.current.children
        setSorting(false);
        setSortType("")
      }, delay);
    }
  }, [i, j, inputArray, swapCounter, sorting, sortType, delay]);

  const lengthOfArrayHandler = (e) => {
    let v = parseInt(e.target.value);
    console.log(v);
    setLenghtOfArray(v)
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
    setSortType(BUBBLE_SORT)
  }

  const startSelectionSort = () => {
    setSorting(true)
    setI(0);
    setJ(1);
    setSpecialStoredValue(0);
    setSortType(SELECTION_SORT)
  }

  const startInsertionSort = () => {
    setSorting(true)
    setI(1);
    setJ(0);
    setSpecialStoredValue(0);
    setSortType(INSERTION_SORT)
  }

  return (
    <div className="page-container">
      <div>
        <InstructionsManual />
      </div>
      <div className={"graph-on-screen"}>
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
          <button disabled={sorting ? true : false} className="button" onClick={() => generateRandomArray(999, 4000)}>
            Generate random array
          </button>
          <button disabled={sorting ? true : false} className="button" onClick={() => bubbleSort()}>
            start bubble sort
          </button>
          <button disabled={sorting ? true : false} className="button" onClick={() => startSelectionSort()}>
            start Selection sort
          </button>
          {/* <button disabled={sorting ? true : false} className="button" onClick={() => startMergeSort()}>
            start Merge sort
          </button> */}
          <button disabled={sorting ? true : false} className="button" onClick={() => startInsertionSort()}>
            start Insertion sort
          </button>
          {/* <button disabled={sorting ? true : false} className="button" onClick={() => bubbleSort()}>
            start Quick sort
          </button> */}

          <div className="input-range button">
            <div>Choose Speed: </div>
            <input
            disabled={sorting ? true : false}
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

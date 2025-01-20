import React, {forwardRef } from 'react'
import './Graph.css';

const Graph = forwardRef((props, ref) => {

  const findLargestElement = (arr) => {
    return arr.reduce((largest, current) =>
      (current > largest ? current : largest), arr[0]);
  }

  const length = props.array ? props.array.length : 0;
  const largestElement = props.array ? findLargestElement(props.array) : 0;
  const unit = 380 / largestElement;

  const output = <div className='graph-container'>
    <div style={{ display: "flex", flexDirection: "row" }} >
      <div 
                  ref={ref}
      className='graph-area'>
        {props.array.map((element, key) => {
          return <div
            className="bar"
            id={key}
            key={key}
            style={{
              transition: `${props.delay}ms`,
              height: `${(element * unit)}px`,
              width: length ? `${800 / (length)}px` : "2px",
              // border: "1px solid black",
            }}>
            {length <= 31 ? `${element}` : ""}
          </div>
        })}
      </div>
    </div>

    <div style={{
      display: "flex",
      flexDirection: "row",
      width: "800px",
    }}>

      {/* for (i = 0 ; i < length; i++) */}
      {props.array.map((element, key) => {
        return <div
          className='bar-number-at-bottom'
          key={key}
          style={{

            width: length ? `${800 / (length)}px` : "2px",
          }}> {length <= 31 ? `${element}` : ""}
        </div>
      })}
    </div>

  </div>
  return (
    <div>{output}</div>
  )
});

export default Graph
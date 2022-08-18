import { useState, useRef } from "react";
import Timetrackerrepat from "./Timetrackerrepat";
import "./Timetracker.css";
const Timetracker = (props) => {
  const [btnflag, setbtnflag] = useState(true);
  const [counts, setCount] = useState(0);
  const [time, setime] = useState("00:00:00");
  const [list, setList] = useState([]);
  const inputRef = useRef(null);

  const deleteList = (index) => {
    console.log("index in parent", index, "list");
    setList((prevState) => {
      console.log(prevState[0].props);
      // return prevState;
      return prevState.filter((element) => {
        return element != prevState[index];
      });
    });
  };
  function stopTimer() {
    setbtnflag(true);
    // console.log(inputRef.current.value);
    clearInterval(localStorage.getItem("interval"));
    const date = new Date();
    const stopDate = date.toLocaleTimeString();
    console.log(localStorage.getItem("startDate"), stopDate);
    setCount(0);
    setime("00:00:00");

    setList((prevState) => {
      return [
        <Timetrackerrepat
          stop={stopDate}
          inputValue={inputRef.current.value}
          delete={list.length}
          deleteLists={deleteList}
          // Key={1}
        />,
        ...prevState,
      ];
    });
  }

  function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
    let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
  }
  function startTimer() {
    // console.log(counts);
    setbtnflag(false);

    const interval = setInterval(() => {
      setCount((prevState) => {
        const sec = prevState + 1;
        const strTime = convertHMS(sec);
        setime(strTime);
        return sec;
      });
    }, 1000);
    const date = new Date();
    const startDate = date.toLocaleTimeString();
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("interval", interval);
  }

  // function startTimer() {
  //   // console.log(counts);

  //   const interval = setInterval(() => {
  //     setCount((counts) => {
  //       // counts++;
  //       if (counts < 59) {
  //         // console.log("sec------->", counts + 1);
  //         return (counts = counts + 1);
  //       } else if (min < 59) {
  //         setmin((min) => {
  //           // console.log("min------->", min + 1);
  //           return (min = min + 1);
  //         });
  //         return 0;
  //       }
  //     });
  //   }, 1000);
  //   const date = new Date();
  //   const startDate = date.toLocaleTimeString();
  //   localStorage.setItem("startDate", startDate);
  //   localStorage.setItem("interval", interval);
  // }

  return (
    <>
      <div className="Timesheet">
        <div className="Timesheet__table">
          <input
            type="text"
            ref={inputRef}
            id="text"
            placeholder="What are you work on?"
          />
          <div className="pro">
            <img src="./plus-blue.svg" alt="" />
            <span>Project</span>
          </div>
          <img src="./tag-gray.svg" alt="" />

          <div className="pro">
            <time id="time">{time}</time>
          </div>

          {btnflag ? (
            <img
              onClick={startTimer}
              className="icons"
              src="./play.png"
              alt=""
            />
          ) : (
            <img
              onClick={stopTimer}
              className="icons"
              src="./puse.png"
              alt=""
            />
          )}
          {/* <button id="btnTimeStart" onClick={stopTimer}>
            STOP
          </button> */}
        </div>
        <div id="hidShow"></div>
      </div>
      <div className="Timesheet__table__repeat" id="list">
        {list}
      </div>
    </>
  );
};
export default Timetracker;

import { useState } from "react";
import Timetrackerrepat from "./Timetrackerrepat";
import Totaltime from "./Totaltime";
import "./Timetracker.css";
const Timetracker = (props) => {
  const [btnflag, setbtnflag] = useState(true);
  const [counts, setCount] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [time, setime] = useState("00:00:00");
  const [list, setList] = useState([]);
  const [input, setInput] = useState();

  const total = convertHMS(totalTime);
  // console.log();
  const deleteList = (index) => {
    // console.log("index in parent", index, "list");
    setList((prevState) => {
      // console.log(prevState[0].props);
      // return prevState;
      return prevState.filter((element) => {
        return element !== prevState[index];
      });
    });
  };
  function stopTimer() {
    setbtnflag(true);
    clearInterval(localStorage.getItem("interval"));
    const date = new Date();
    const stopDate = date.toLocaleTimeString();
    const startDate = localStorage.getItem("startDate");
    console.log(localStorage.getItem("startDate"), stopDate);
    console.log("Total Time", totalTime);
    setCount(0);
    setime("00:00:00");
    if (!input) {
    } else {
      setList(() => {
        return [{ input, stopDate, startDate, counts }, ...list];
      });
      setInput("");
    }
    setCount(0);
    setime("00:00:00");
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
        setTotalTime(totalTime + sec);

        return sec;
      });
    }, 1000);
    const date = new Date();
    const startDate = date.toLocaleTimeString();
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("interval", interval);
  }

  return (
    <>
      <div className="Timesheet">
        <div className="Timesheet__table">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id="text"
            placeholder="What are you work on?"
          />
          <div className="pro">
            {/* <span>Project</span> */}
            <img src="./plus-blue.svg" alt="" />
            <select>
              <option selected>Clockify</option>
              <option>Project</option>
              <option>Project</option>
              <option>Project</option>
            </select>
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
        </div>
        <div id="hidShow"></div>
      </div>
      <div className="Timesheet__table__repeat" id="list">
        <Totaltime total={total}></Totaltime>
        {list.map((elem, ind) => {
          console.log(elem.counts, "particular list time and index", ind);
          {/* setTotalTime(totalTime + elem.counts); */}
          return (
            <Timetrackerrepat
              key={ind}
              inputValue={elem.input}
              stop={elem.stopDate}
              start={elem.startDate}
              deleteLists={() => deleteList(ind)}
            />
          );
        })}
      </div>
    </>
  );
};
export default Timetracker;

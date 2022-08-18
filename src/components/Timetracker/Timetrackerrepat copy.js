const Timetrackerrepat = (props) => {
  function deleteHendler(index) {
    console.log("index of list", index);

    props.deleteLists(index);
  }
  return (
    <div className="Timesheet__table">
      <input
        type="text"
        value={props.inputValue}
        placeholder="What are you work on?"
      />

      <div className="pro">
        <img src="./plus-blue.svg" alt="" />
        <span>Project</span>
      </div>
      <img src="./tag-gray.svg" alt="" />

      <div className="pro">
        <time id="time">{localStorage.getItem("startDate")}</time>
      </div>
      <div className="pro">
        <time id="time">{props.stop}</time>
      </div>
      <img
        className="icons"
        src="./delete.png"
        alt=""
        onClick={() => deleteHendler(props.delete)}
      />
      {/* <button id="btnTimeStart">Delete</button> */}
    </div>
  );
};
export default Timetrackerrepat;

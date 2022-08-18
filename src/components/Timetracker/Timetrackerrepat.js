const Timetrackerrepat = (props) => {
  return (
    <div className="Timesheet__table">
      <input
        type="text"
        value={props.inputValue}
        onChange={() => {}}
        placeholder="What are you work on?"
      />

      <div className="pro">
        <img src="./plus-blue.svg" alt="" />
        <span>Project</span>
      </div>
      <img src="./tag-gray.svg" alt="" />

      <div className="pro">
        <time id="time">{props.start}</time>
      </div>
      <div className="pro">
        <time id="time">{props.stop}</time>
      </div>
      <img
        className="icons"
        src="./delete.png"
        alt=""
        onClick={props.deleteLists}
      />
    </div>
  );
};
export default Timetrackerrepat;

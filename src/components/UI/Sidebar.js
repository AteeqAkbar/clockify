import "./Sidebar.css";
import Timetracker from "../Timetracker/Timetracker";

const Sidebar = (props) => {
  return (
    <div className="product__container">
      <div
        id="product__container__sidebar"
        className="product__container__sidebar"
      >
        <div title="Time Tracker">
          <img
            src="https://clockify.me/assets/nav-icons/time-tracker.svg"
            alt="icon"
          />

          <span>Time Tracker</span>
        </div>

        <div title="Calender">
          <img
            src="https://clockify.me/assets/nav-icons/timesheet.svg"
            alt="icon"
          />
          <span>Calender</span>
        </div>

        <div id="product__analyze">
          <p>Analyze</p>
        </div>
        <div title="Dashboard">
          <img
            src="https://clockify.me/assets/nav-icons/dashboard.svg"
            alt="icon"
          />
          <span>Dashboard</span>
        </div>
        <div id="product__manage">
          <p>Manage</p>
        </div>
        <div title="Team">
          <img
            src="https://clockify.me/assets/nav-icons/teams.svg"
            alt="icon"
          />
          <span>Team</span>
        </div>
        <div title="Clients">
          <img
            src="https://clockify.me/assets/nav-icons/clients.svg"
            alt="icon"
          />
          <span>Clients</span>
        </div>
        <div title="Tags">
          <img src="https://clockify.me/assets/nav-icons/tags.svg" alt="icon" />
          <span>Tags</span>
        </div>
        <div title="Settings">
          <img
            src="https://clockify.me/assets/nav-icons/settings.svg"
            alt="icon"
          />
          <span>Settings</span>
        </div>
      </div>
      <div
        id="product__container__content"
        className="product__container__content"
      >
        <Timetracker />
        {/* <div className="dashboard">
          <div className="dashboard__header">
            <h1>Dashboard</h1>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Sidebar;

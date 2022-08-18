import "./Header.css";

const Header = (props) => {
  return (
    <div className="product__navigation">
      <div>
        <i className="fas fa-bars"></i>
      </div>
      <div>
        <img
          src="https://clockify.me/assets/images/clockify-logo.svg"
          alt="logo"
        />
      </div>
      <div className="product__navigation__spacer"></div>

      <div>
        <img src="https://clockify.me/assets/nav-icons/help.svg" />
      </div>
      <div>
        <img src="https://clockify.me/assets/nav-icons/notification.svg" />
      </div>
      <div>
        <i className="fas fa-user"></i>
        <div className="dropdown">
          <span className="dropbtn">Profile </span>
          {/* <div className="dropdown-content">
            <a href="#" id="profile_password">
              {" "}
            </a>
            <a href="settings.html"> Profile Setting</a>
            <a href="desktopapp.html"> Download</a>
            <a href="home.html"> Logout </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

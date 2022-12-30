import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="header__menuIcon" />
        <Link to="/">
          <img
            className="header__logo"
            src="https://static.vecteezy.com/system/resources/previews/003/206/623/original/youtube-editorial-app-icon-free-vector.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          className="headerInput__input"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        
        <NotificationsIcon className="header__icon" />
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcLJjW4q3WawvgG5l1h-DWsZI0SuMEUgeRg&usqp=CAU"
          alt="Ahlem Tabbassi"
        />
      </div>
    </div>
  );
}

export default Header;
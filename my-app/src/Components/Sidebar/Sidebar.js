import React, { useState } from "react";
import "./Sidebar.css";
import { sidebar } from "../../Data/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ setCardIsOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarData = sidebar();
  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <div className="hamburger-menu" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
        <ul className={isOpen ? "lists open" : "lists"}>
          <li onClick={() => setCardIsOpen("searchCard")}>Home</li>
          <li onClick={() => setCardIsOpen("locationCard")}>Location</li>
          <li onClick={() => setCardIsOpen("settingsCard")}>Settings</li>
          <li onClick={() => setCardIsOpen("aboutMeCard")}>About Me</li>
        </ul>
      </div>
      {sidebarData.map((item) => (
        <div
          className="sidebar-item"
          key={item.id}
          onClick={() => setCardIsOpen(item.openCard)}
        >
          <div>
            <FontAwesomeIcon icon={item.icon} />
          </div>
          <p className="item-description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

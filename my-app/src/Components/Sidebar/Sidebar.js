import React, { useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLocationArrow,
  faGear,
  faAddressCard,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ setCardIsOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarData = [
    {
      id: 1,
      openCard: "searchCard",
      icon: faHouse,
      description: "Home",
    },
    {
      id: 2,
      openCard: "locationCard",
      icon: faLocationArrow,
      description: "Location",
    },
    {
      id: 3,
      openCard: "settingsCard",
      icon: faGear,
      description: "Settings",
    },
    {
      id: 4,
      openCard: "aboutMeCard",
      icon: faAddressCard,
      description: "About Me",
    },
  ];

  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
        <ul className={isOpen ? "listsOpen" : "lists"}>
          <li onClick={() => setCardIsOpen("searchCard")}>Home</li>
          <li onClick={() => setCardIsOpen("locationCard")}>Location</li>
          <li onClick={() => setCardIsOpen("settingsCard")}>Settings</li>
          <li onClick={() => setCardIsOpen("aboutMeCard")}>About Me</li>
        </ul>
      </div>
      {sidebarData.map((item) => (
        <div
          className="sidebarItem"
          key={item.id}
          onClick={() => setCardIsOpen(item.openCard)}
        >
          <div>
            <FontAwesomeIcon icon={item.icon} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

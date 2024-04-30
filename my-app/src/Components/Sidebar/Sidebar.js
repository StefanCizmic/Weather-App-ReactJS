import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faLocationArrow,
  faGear,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ setCardIsOpen }) => {
  
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
    <div className="sidebar">
      {sidebarData.map(item => (
        <div className="sidebarItem" key={item.id} onClick={() => setCardIsOpen(item.openCard)}>
          <div>
            <FontAwesomeIcon icon={item.icon}/>
          </div>
          <span>{item.description}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

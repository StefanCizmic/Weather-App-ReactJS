import React from "react";
import "./AboutMe.css";
import SidebarLayout from "../SidebarLayout/SidebarLayout";
import { aboutMe } from '../../Data/aboutMe';
import { useScreenWidth } from "../../Hooks/useScreenWidth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = () => {
  const screenWidth = useScreenWidth();
  const openSite = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <SidebarLayout>
      <div className="aboutContainer">
        {aboutMe.map((item) => (
          <div
            className="iconContainer"
            key={item.name}
            onClick={() => openSite(item.url)}
          >
            <div className="icon">
              <FontAwesomeIcon
                className="aboutIcons"
                icon={item.icon}
                style={{color: 'white', fontSize: screenWidth < 1150 ? "35px" : "110px"}}
              />
            </div>
          </div>
        ))}
      </div>
    </SidebarLayout>
  );
};

export default AboutMe;

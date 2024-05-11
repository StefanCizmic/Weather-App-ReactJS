import React from "react";
import "./AboutMe.css";
import SidebarLayout from "../SidebarLayout/SidebarLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faUpwork,
} from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  const icons = [
    {
      name: "github",
      icon: faGithub,
      url: "https://github.com/StefanCizmic?tab=repositories",
    },
    {
      name: "linkedin",
      icon: faLinkedinIn,
      url: "https://www.linkedin.com/in/stefan-%C4%8Dizmi%C4%87-77a90a24a/",
    },
    {
      name: "upwork",
      icon: faUpwork,
      url: "https://www.upwork.com/freelancers/~0119c0b8efbe2e8822",
    },
  ];

  const openSite = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <SidebarLayout>
      <div className="aboutContainer">
        {icons.map((item) => (
          <div
            className="iconContainer"
            key={item.name}
            onClick={() => openSite(item.url)}
          >
            <div className="icon">
              <FontAwesomeIcon
                icon={item.icon}
                style={{color: 'white', fontSize: "110px"}}
              />
            </div>
          </div>
        ))}
      </div>
    </SidebarLayout>
  );
};

export default AboutMe;

import React from "react";
import "./AboutMe.css";
import SidebarLayout from "../SidebarLayout/SidebarLayout";
import github from "../../Images/Icons/Github.png";
import linkedin from "../../Images/Icons/Linkedin.webp";
import upwork from "../../Images/Icons/Upwork.png";

const AboutMe = () => {
  
  const icons = [
    {
      name: "github",
      src: github,
      url: "https://github.com/StefanCizmic?tab=repositories",
    },
    {
      name: "linkedin",
      src: linkedin,
      url: "https://www.linkedin.com/in/stefan-%C4%8Dizmi%C4%87-77a90a24a/",
    },
    {
      name: "upwork",
      src: upwork,
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
            <div className="iconImg">
              <img src={item.src} alt={item.name} />
            </div>
          </div>
        ))}
      </div>
    </SidebarLayout>
  );
};

export default AboutMe;

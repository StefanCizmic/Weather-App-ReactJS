import React from "react";
import SidebarLayout from "../SidebarLayout/SidebarLayout";
import "./Settings.css";

const Settings = ({setUnits, setMeasurement, setCardIsOpen}) => {
  
  return (
    <SidebarLayout>
      <div className="settingsContainer">
        <h2>Set units:</h2>
        <div className="unitButtons">
        <button onClick={() => setUnits('imperial') || setCardIsOpen('searchCard')}>Imperial</button>
        <button onClick={() => setUnits('metric') || setCardIsOpen('searchCard')}>Metric</button>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Settings;

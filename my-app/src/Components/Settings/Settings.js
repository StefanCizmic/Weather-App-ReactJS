import React from "react";
import SidebarLayout from "../SidebarLayout/SidebarLayout";
import "./Settings.css";

const Settings = ({setUnits, setCardIsOpen}) => {
  
  return (
    <SidebarLayout>
      <div className="settings">
        <h2>Set units:</h2>
        <div className="settings-buttons">
        <button onClick={() => setUnits('imperial') || setCardIsOpen('searchCard')}>Imperial</button>
        <button onClick={() => setUnits('metric') || setCardIsOpen('searchCard')}>Metric</button>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Settings;

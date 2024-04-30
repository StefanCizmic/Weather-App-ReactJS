import React from "react";
import "./SidebarLayout.css";

const SidebarLayout = (props) => {
  return <div className="card">{props.children}</div>;
};

export default SidebarLayout;

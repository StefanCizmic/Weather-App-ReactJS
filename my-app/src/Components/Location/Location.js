import React, {useState} from "react";
import SidebarLayout from "../SidebarLayout/SidebarLayout";
import "./Location.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import arcades from "./arcades.json";

const Location = ({ currentLocation }) => {
  const customIcon = new Icon({
    iconUrl:
      "https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-Download-PNG.png",
    iconSize: [38, 38],
  });

  return (
    <SidebarLayout>
      {currentLocation.latitude !== undefined ? (
        <MapContainer
          center={[currentLocation.latitude, currentLocation.longitude]}
          zoom={11}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[currentLocation.latitude, currentLocation.longitude]}
            icon={customIcon}
          />
        </MapContainer>
      ) : (
        <div className="errorMessage">
          <h2>Error</h2>
          <p>Failed to load map. Please allow access to your location</p>
        </div>
      )}
    </SidebarLayout>
  );
};

export default Location;

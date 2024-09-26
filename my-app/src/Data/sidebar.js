import {
    faHouse,
    faLocationArrow,
    faGear,
    faAddressCard
  } from "@fortawesome/free-solid-svg-icons";

export const sidebar = () => [
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
      description: "About",
    },
]
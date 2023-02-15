import iconMoon from "../assets/moon-solid.svg";
import iconSun from "../assets/icon-sun.svg";
import iconArrow from "../assets/icon-arrow.svg";
import iconArrrowDown from "../assets/icon-arrow-up.svg";
import iconArrowWhite from "../assets/icon-arrow-white-down.png";
import iconArrowWhiteUp from "../assets/icon-arrow-white-up.png";
import iconArrowLinkWhite from "../assets/arrow-left-white.png";
import iconArrowLinkBlack from "../assets/arrow-left-black.png";

export const lightTheme = {
  body: "#FAFAFA",
  text: "#111517",
  headerCountryBackground: "#FFFFFF",
  headerShadow: "0px 2px 4px rgba(0, 0, 0, 0.0562443)",
  inputColor: "#FFFFFF",
  inputShadow: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
  imgIconTheme: `${iconMoon}`,
  icon: `${iconArrrowDown}`,
  iconUp: `${iconArrow}`,
  iconArrow: `${iconArrowLinkBlack}`
};

export const darkTheme = {
  body: "#202C36",
  text: "#FFFFFF",
  headerCountryBackground: "#2B3844",
  headerShadow: "0px 2px 4px rgba(0, 0, 0, 0.0562443)",
  inputColor: "#2B3844",
  inputShadow: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
  imgIconTheme: `${iconSun}`,
  icon: `${iconArrowWhite}`,
  iconUp: `${iconArrowWhiteUp}`,
  iconArrow: `${iconArrowLinkWhite}`
};
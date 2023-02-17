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
  headerShadow: "0rem 0.125rem 0.25rem rgba(0, 0, 0, 0.0562443)",
  inputColor: "#FFFFFF",
  inputShadow: "0rem 0.125rem 0.5625rem rgba(0, 0, 0, 0.0532439)",
  imgIconTheme: `${iconMoon}`,
  icon: `${iconArrrowDown}`,
  iconUp: `${iconArrow}`,
  iconArrow: `${iconArrowLinkBlack}`,
  flagShadow: "0rem 0rem 0.875rem 0.25rem rgba(0, 0, 0, 0.0294384)",
  borderShadow: "0rem 0rem 0.25rem 0.0625rem rgba(0, 0, 0, 0.104931)",
  selectShadow: "0rem 0.125rem 0.5625rem rgba(0, 0, 0, 0.0532439)",
};

export const darkTheme = {
  body: "#202C36",
  text: "#FFFFFF",
  headerCountryBackground: "#2B3844",
  headerShadow: "0rem 0.125rem 0.25rem rgba(0, 0, 0, 0.0562443)",
  inputColor: "#2B3844",
  inputShadow: "0rem 0.125rem 0.5625rem rgba(0, 0, 0, 0.0532439)",
  imgIconTheme: `${iconSun}`,
  icon: `${iconArrowWhite}`,
  iconUp: `${iconArrowWhiteUp}`,
  iconArrow: `${iconArrowLinkWhite}`,
  flagShadow: "0rem 0rem 0.875rem 0.25rem rgba(0, 0, 0, 0.0294384)",
  borderShadow: "0rem 0rem 0.25rem 0.0625rem rgba(0, 0, 0, 0.104931)",
  selectShadow: "0rem 0.125rem 0.5625rem rgba(0, 0, 0, 0.0532439)"
};
import { useState } from "react";
import { HeaderStyled } from "../styles/Header";

interface HeaderProps {
  themeToggler: () => void;
};

interface ButtonProps {
  text: string,
  onClick: () => void,
  ariaLabel?: string
};

const Button: React.FC<ButtonProps> = ({ onClick, text, ariaLabel }) => {
  return (<button aria-label={ariaLabel} onClick={onClick}>{text}</button>);
};

export const Header: React.FC<HeaderProps> = ({ themeToggler }) => {

  const [buttonText, setButtonText] = useState("Dark Mode");
  
  const handleTextButton = () => {
    buttonText === "Dark Mode" ? setButtonText("Light Mode") : setButtonText("Dark Mode");
  };

  return (
    <HeaderStyled>
      <div className="container">
        <h1>Where in the world?</h1>
        <Button ariaLabel={buttonText === "Light Mode" ? "Enable Light Mode" : "Enable Dark Mode" } onClick={() => {
          themeToggler()
          handleTextButton()
        }} text={buttonText} />
      </div>
    </HeaderStyled>
  );
};
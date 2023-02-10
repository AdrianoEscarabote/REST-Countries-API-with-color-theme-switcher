import { HeaderStyled } from "../styles/Header";

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <h1>Where in the world?</h1>
        <button>Dark Mode</button>
      </div>
    </HeaderStyled>
  );
};
import styled from "styled-components";
import iconMoon from "../assets/moon-solid.svg";

export const HeaderStyled = styled.header`
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);

  .container {
    width: 100%;
    max-width: 1440px;
    padding: 20px 60px;
    display: flex;
    justify-content: space-between;

    h1 {
      font-weight: 800;
      font-size: 24px;
      line-height: 33px;
      color: #111517;
    }

    button {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      width: 108px;
      height: 22px;
      text-align: right;
      background: url(${iconMoon}) no-repeat left;
    }
  }
`
import styled from "styled-components";
import iconMoon from "../assets/moon-solid.svg";

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.headerCountryBackground};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.headerShadow};

  .container {
    width: 100%;
    max-width: 1440px;
    padding: 20px 80px;
    display: flex;
    justify-content: space-between;

    h1 {
      font-weight: 800;
      font-size: 24px;
      line-height: 33px;
    }

    button {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      width: 108px;
      height: 22px;
      text-align: right;
      background: url(${({ theme }) => theme.imgIconTheme}) no-repeat left;
    }
  }

  @media (max-width: 864px) {
    .container {
      padding: 20px 30px;
    }
  }
`
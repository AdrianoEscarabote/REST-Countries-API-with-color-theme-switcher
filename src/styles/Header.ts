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
    max-width: 90rem;
    padding: 1.4375rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 2.0625rem;
    }

    button {
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.375rem;
      width: 6.75rem;
      height: 1.375rem;
      text-align: right;
      background: url(${({ theme }) => theme.imgIconTheme}) no-repeat left;
    }
  }

  @media (max-width: 54rem) {
    .container {
      padding: 1.25rem 1.25rem;
      
      h1 {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }

      button {
        font-size: 0.75rem;
        line-height: 1rem;
        background-position: 1.25rem;
      }
    }
  }
`
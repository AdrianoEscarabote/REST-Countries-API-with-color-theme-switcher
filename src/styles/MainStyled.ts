import styled from "styled-components";
import iconSearch from "../assets/icon-search.svg";

export const MainStyled = styled.main`
display: flex;
align-items: center;
justify-content: center;

.container {
  width: 100%;
  max-width: 1440px;
  padding: 20px 60px;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    input {
      width: 480px;
      height: 56px;
      box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
      border-radius: 5px;
      outline: transparent; 
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      padding-left: 74px;
      background: #FFFFFF url(${iconSearch}) 30px 20px no-repeat;
      border: transparent;
    }
  }

  #countries {
    margin-top: 48px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 75px; 
    justify-content: space-between;
  }
}
`
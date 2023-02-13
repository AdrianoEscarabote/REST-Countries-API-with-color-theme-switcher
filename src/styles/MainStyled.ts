import styled from "styled-components";
import iconSearch from "../assets/icon-search.svg";

export const MainStyled = styled.main`
display: flex;
align-items: center;
justify-content: center;

.container {
  width: 100%;
  max-width: 1440px;
  padding: 20px 80px;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    input {
      width: 480px;
      height: 56px;
      box-shadow: ${({ theme }) => theme.inputShadow};
      color: ${({ theme }) => theme.text};
      border-radius: 5px;
      outline: transparent; 
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      padding-left: 74px;
      background: ${({ theme }) => theme.inputColor} url(${iconSearch}) 30px 20px no-repeat;
      border: transparent;
    }
    
    select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      color: ${({ theme }) => theme.text};
      width: 100%;
      max-width: 200px;
      height: 56px;
      padding: 0px 19px 0px 24px;
      background: url(${({ theme }) => theme.icon}) no-repeat ${({ theme }) => theme.inputColor};
      background-position: 90% 15px;
    }
  }

  section,
  #countries {
    margin: 48px 0px 0px 0px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 75px; 
    justify-content: space-between;
    padding: 0px;
  }

  #countries {
    animation: countries_animation 1s ease-in-out;
  }
}

.open {
  background: url(${({ theme }) => theme.iconUp}) no-repeat ${({ theme }) => theme.inputColor} !Important;
  background-position: 90% 15px !Important;
}

@media (max-width: 864px) {
  .container {
    padding: 20px 30px;
  }
  #countries {
    gap: 25px !Important; 
  }
  form {
    flex-direction: column;
    align-items: flex-start !Important;
    gap: 40px;
    
    input {
      width: 100% !Important;
      height: 56px;
      box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
      border-radius: 5px;
      outline: transparent; 
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      padding-left: 74px;
    }
  }
}

@media (max-width: 612px) {
  #countries {
    justify-content: center !Important;
  }
}

.error {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  gap: 25px;
  animation: errorAnimation 1s ease-in-out;

  img {
    background-color: transparent;
  }

  .error_p {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    max-width: 420px;
  }
}

@media(min-width: 43.75rem) {
  @keyframes errorAnimation {
    from {
      opacity: 0;
      transform: translateY(-10%);
    } to {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  @keyframes countries_animation {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
}

`
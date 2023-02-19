import styled from "styled-components";
import iconSearch from "../assets/icon-search.svg";

export const MainStyled = styled.main`
display: flex;
align-items: center;
justify-content: center;

.container {
  width: 100%;
  max-width: 90rem;
  padding: 3.0625rem 5rem 1.25rem 5rem;

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    input {
      width: 25.3125rem;
      height: 3.5rem;
      box-shadow: ${({ theme }) => theme.inputShadow};
      color: ${({ theme }) => theme.text};
      border-radius: 0.3125rem;
      outline: transparent; 
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.25rem;
      padding-left: 4.625rem;
      background: ${({ theme }) => theme.inputColor} url(${iconSearch}) 1.875rem 1.25rem no-repeat;
      border: transparent;
    }

    .label_region {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        color: ${({ theme }) => theme.text};
        width: 100%;
        max-width: 12.5rem;
        height: 3.5rem;
        padding: 0rem 1.1875rem 0rem 1.5rem;
        background: url(${({ theme }) => theme.icon}) no-repeat ${({ theme }) => theme.inputColor};
        background-size: 0.75rem;
        background-position: 90% 50%;
        border-radius: 0.3125rem;
        border: 0px; 
        box-shadow: ${({ theme }) => theme.selectShadow};
        
        option {
          border-radius: 10px !Important;
          border: 0px;
          box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
        }
  
        &::focus {
          border: 1px solid black;
        }
      }
    }
    
  }

  section,
  #countries {
    margin: 1.5rem 0rem 0rem 0rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4.625rem; 
    justify-content: space-between;
    padding: 0rem;
  }

  #countries {
    animation: countries_animation 0.8s ease-in-out;
  }
}

.open {
  background: url(${({ theme }) => theme.iconUp}) no-repeat ${({ theme }) => theme.inputColor} !Important;
  background-position: 90% 50% !Important;
  background-size: 0.75rem !Important; 
}

.error {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  gap: 1.5625rem;
  animation: errorAnimation 1s ease-in-out;

  img {
    background-color: transparent;
  }

  .error_p {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    max-width: 26.25rem;
  }
}

@media (max-width: 54rem) {
  label {
    justify-content: flex-start !Important;
  }
  .container {
    padding: 1.25rem 1.25rem;
  }
  #countries {
    gap: 1.5625rem !Important; 
  }
  form {
    flex-direction: column;
    align-items: flex-start !Important;
    gap: 2.5rem;
    width: 100%;
    
    label {
      input {
        width: 100% !Important;
        max-width: unset;
        height: 3rem;
        font-size: 0.75rem;
      }
    }
  }
}

@media (max-width: 36.625rem) {
  section {
    margin-top: 2rem !Important;
  }

  form {
    input {
      background-position: 0.9375rem !Important;
      padding-left: 2.875rem !Important;
    }
  }
}

@media (max-width: 38.25rem) {
  #countries {
    justify-content: center !Important;
    gap: 2.5rem !Important;
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
}`
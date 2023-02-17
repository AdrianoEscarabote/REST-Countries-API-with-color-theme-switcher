import styled from "styled-components";

export const CountryStyled = styled.main`
display: flex;
align-items: center;
justify-content: center;
margin-top: 5rem;
animation: country_animation 0.8s ease-in-out;

.container {
  position: relative;
  max-width: 90rem;
  width: 100%;
  padding: 1.25rem 5rem;

  .link_back {
    position: absolute;
    top: 0rem;
    box-shadow: 0rem 0rem 0.4375rem rgba(0, 0, 0, 0.293139);
    border-radius: 0.375rem;
    width: 7.25rem;
    height: 2.5rem;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.25rem;
    background: ${({ theme }) => theme.headerCountryBackground} url(${({ theme }) => theme.iconArrow}) no-repeat;
    background-position: 1.875rem;
    display: grid;
    place-content: center;
    text-decoration: none;
    color: unset;
    padding-left: 1.25rem;
  }
  
  .content {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 50% 50%;
    place-content: center;
    height: 100%; 

    .flag {
      border-radius: 0.6254rem;
      img {
        width: 35rem;
        height: 25.0625rem;
        border-radius: 0.6254rem;
        box-shadow: ${({ theme }) => theme.flagShadow};
      }
    }
  
    .details {
      height: 100%;
      h2 {
        font-weight: 800;
        font-size: 2rem;
        line-height: 2.75rem;
      }
      .info {
        display: grid;
        grid-template-columns: 50% 50%;
        place-content: center;


        ul {
          padding: 0px;
          li {
            list-style: none;
            p {
              font-weight: 600;
              font-size: 1rem;
              line-height: 2rem;
              span {
                font-weight: 300;
              }
            }
          }
        }
      }

      .borders {
        p {
          font-weight: 600;
          font-size: 1rem;
          line-height: 1.5rem;
          display: flex; 
          align-items: center;
          flex-wrap: wrap;
          gap: 0.625rem;
          
          a {
            text-decoration: none;
            color: unset; 
            padding: 0.125rem 0.625rem;
            height: 1.75rem; 
            border-radius: 0.125rem;
            display: grid;
            place-content: center;
            background-color: ${({ theme }) => theme.headerCountryBackground};
            font-weight: 300;
            font-size: 0.875rem;
            line-height: 1.1875rem;
            box-shadow: ${({ theme }) => theme.borderShadow}; 
          }
        }
      }
    }
  }
}

@media(min-width: 43.75rem) {
   @keyframes country_animation {
    from {
      opacity: 0;
    } to {
      opacity: 1;
    }
  }
}

@media (max-width: 81.125rem) {
  .content {
    img {
      width: 28.75rem !Important;
    }
  }
}

@media (max-width: 70rem) {
  .content {
    margin-top: 2rem !Important; 
    display: flex !Important;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
  }
}

@media (max-width: 54.0625rem) {
  .flag {
    margin: 2.5rem 0rem 2.5rem 0rem !Important;

    img {
      height: unset !Important;
    }
  } 
  .details {
    max-width: 29.25rem;

    .info {
      display: flex !Important;
      flex-direction: column !Important;
      gap: 0rem !Important;

      .column {
        margin: 0.625rem 0rem 0rem 0rem;
      }

      .column2 {
        margin: 0rem 0rem 1.25rem 0rem;
      }
    }
  }
  .container {
    padding: 0.625rem 1.875rem; 
  }
}

@media (max-width: 26.25rem) {
  margin-top: 2rem !Important;

  .container {
    padding: 0.625rem 1.25rem;
  }

  .flag {
    margin: 2.5rem 0rem 2.5rem 0rem;

    img {
      height: auto !Important;
    }
  }
}`
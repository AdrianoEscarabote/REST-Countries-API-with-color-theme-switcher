import styled from "styled-components";

export const CountryStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 5rem;

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
      img {
        width: 35rem;
        height: 25.0625rem;
        border-radius: 0.6254rem;
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
          li {
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
            width: 6rem;
            height: 1.75rem; 
            border-radius: 0.125rem;
            display: grid;
            place-content: center;
            background-color: ${({ theme }) => theme.headerCountryBackground};
            font-weight: 300;
            font-size: 0.875rem;
            line-height: 1.1875rem;
          }
        }
      }
    }
  }
}
`
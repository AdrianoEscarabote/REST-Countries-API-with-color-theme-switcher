import styled from "styled-components";

export const CountryStyled = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 80px;

.container {
  position: relative;
  max-width: 1440px;
  width: 100%;
  padding: 20px 80px;

  a {
    position: absolute;
    top: 0px;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139);
    border-radius: 6px;
    width: 136px;
    height: 40px;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    background-color: ${({ theme }) => theme.headerCountryBackground};
    display: grid;
    place-content: center;
    text-decoration: none;
  }
  
  .content {
    margin-top: 80px;
    display: grid;
    grid-template-columns: 50% 50%;
    place-content: center;
    height: 100%; 

    .flag {
      img {
        width: 560px;
        height: 401px;
        border-radius: 10.0057px;
      }
    }
  
    .details {
      height: 100%;
      h2 {
        font-weight: 800;
        font-size: 32px;
        line-height: 44px;
      }
      .info {
        display: grid;
        grid-template-columns: 50% 50%;
        place-content: center;

        ul {
          li {
            p {
              font-weight: 600;
              font-size: 16px;
              line-height: 32px;
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
          font-size: 16px;
          line-height: 24px;
          display: flex; 
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          
          span {
            width: 96px;
            height: 28px; 
            border-radius: 2px;
            display: grid;
            place-content: center;
            background-color: ${({ theme }) => theme.headerCountryBackground};
            font-weight: 300;
            font-size: 14px;
            line-height: 19px;
          }
        }
      }
    }
  }
}
`
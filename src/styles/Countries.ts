import styled from "styled-components";

export const CountriesStyled = styled.li`
list-style: none;
max-width: 16.5rem;
width: 100%;
height: 21rem;
background: ${({ theme }) => theme.headerCountryBackground};
box-shadow: 0rem 0rem 0.4375rem 0.125rem rgba(0, 0, 0, 0.0294384);
border-radius: 0.3125rem;

&:hover {
  transform: scale(1.02);
}

&::focus {
  a {
    border: 0.0625rem solid #000; 
  }
}

a {
  text-decoration: none !Important;
  color: unset;
  display: grid;
  grid-template-rows: 50% 50%;

  .img {
    width: 100%; 
    height: 10rem;
    border-radius: 0.3125rem 0.3125rem 0rem 0rem;

    img {
      width: 100%;  
      height: 10rem;
      border-radius: 0.3125rem 0.3125rem 0rem 0rem;
    }
  }

  .text {
    h2 {
      padding: 1.5rem;
      font-weight: 800;
      font-size: 1.125rem;
      line-height: 1.625rem;
    }
  
    ul {
      list-style: none;
      margin: 0;
      padding: 0rem 1.5rem 1.5rem 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
    
      p {
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 1rem;
    
        span {
          font-weight: 300;
        }
      }
    }
  }
}`
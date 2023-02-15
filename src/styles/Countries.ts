import styled from "styled-components";

export const CountriesStyled = styled.li`
list-style: none;
width: 100%;
width: 264px;
height: 336px;
background: ${({ theme }) => theme.headerCountryBackground};
box-shadow: 0rem 0rem 0.4375rem 0.125rem rgba(0, 0, 0, 0.0294384);
border-radius: 0.3125rem;
transition: 0.4s ease-in-out;

&:hover {
  transform: scale(1.02);
}

&::focus {
  border: 1px solid #000; 
}

a {
  text-decoration: none !Important;
  color: unset;

  .img {
    height: 160px;
    width: 100%:

    img {
      height: 100%;
    }
  }

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
  
    p {
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1rem;
  
      span {
        font-weight: 300;
      }
    }
  }
}`
import styled from "styled-components";

export const CountriesStyled = styled.li`
list-style: none;
width: 100%;
max-width: 16.5rem;
height: 21rem;
background: ${({ theme }) => theme.headerCountryBackground};
box-shadow: 0rem 0rem 0.4375rem 0.125rem rgba(0, 0, 0, 0.0294384);
border-radius: 0.3125rem;

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
`
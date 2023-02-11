import styled from "styled-components"

export default function Teste() {
  return (
    <TesteStyled>
      <h1>Estou no teste!</h1>
    </TesteStyled>
  )
}

const TesteStyled = styled.div`
  width: 500px;
  height: 599px;
  background-color: #000;
`
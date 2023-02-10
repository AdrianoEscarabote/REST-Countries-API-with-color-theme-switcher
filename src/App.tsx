import { GlobalStyle } from './styles/Global'; 
import { Header } from './components/Header';
import { Main } from './components/Main';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
};

export default App;
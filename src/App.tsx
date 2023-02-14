import { GlobalStyle } from './styles/Global'; 
import { Header } from './components/Header';
import { Main } from './components/Main';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Themes';
import { BrowserRouter } from 'react-router-dom';
import { Country } from './components/Country';

function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header themeToggler={themeToggler}/>
      <BrowserRouter>
        {/* <Main />  */}
        <Country nameToSearch="Brazil"/>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
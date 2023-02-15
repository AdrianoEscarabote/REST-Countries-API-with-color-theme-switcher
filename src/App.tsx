import { GlobalStyle } from './styles/Global'; 
import { Header } from './components/Header';
import { Main } from './components/Main';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Themes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Country } from './components/Country';
import { NameToSearch, useName, useSetName } from './context';

function App() {
  const [theme, setTheme] = useState("light");

  const [name, setName] = useState<string>("");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <NameToSearch value={ name }>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Header themeToggler={themeToggler}/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main setName={setName} />} />
            <Route path='/country' element={<Country nameToSearch={name}/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </NameToSearch>
  );
};

export default App;
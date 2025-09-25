import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './components/theme';
import CharactersContainer from './components/CharacterContainer/CharacterContainer';
import Pagination from './components/Pagination/Pagination';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'PT Sans Caption', sans-serif;;
    background-color: ${(props) => props.theme.backgroundSecondary}; 
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }

    ul, li {
    list-style: none; 
    padding-left: 0; 
    margin: 0;       
  }
`;

const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  padding: 2rem 5rem;

  @media (max-width: 375px) {
    padding: 0.5rem 0;
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const [search, setSearch] = useState('');

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <MainContainer>
          <SearchBar value={search} onChange={setSearch} />
          <CharactersContainer />
          <Pagination />
        </MainContainer>
      </div>
    </ThemeProvider>
  );
}

export default App;

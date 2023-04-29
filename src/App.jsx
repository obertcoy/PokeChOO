import './App.css';
import NavigationBar from './pages/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from './pages/SearchPage';
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import FavoritePage from "./pages/FavoritePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { ThemeContext, THEME } from './pages/ThemeContext';
import { useState } from 'react';
import FooterBar from './pages/Footer';

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.graphcdn.app/",
  cache: new InMemoryCache()
});

function App() {

  const [currentTheme, setCurrentTheme] = useState(THEME.default);
  const changeTheme = () => {
    if(currentTheme === THEME.default) {
      setCurrentTheme(THEME.zekrom);
    }
    else if(currentTheme === THEME.zekrom) {
      setCurrentTheme(THEME.default);
    }
    console.log(currentTheme);
  }

  return (
    <div>
      <ApolloProvider client={client}>
        <ThemeContext.Provider value={currentTheme}>
          <BrowserRouter>
            <NavigationBar changeTheme={changeTheme} />
            <Routes>
                <Route path="/search" element={<SearchPage />}></Route>
                <Route path="/" element={<ListPage />}></Route>
                <Route path="/detail/:pokemonName" element={<DetailPage />}></Route>
                <Route path="/favorite" element={<FavoritePage />}></Route>
            </Routes>
            <FooterBar />
          </BrowserRouter>
        </ThemeContext.Provider>
      </ApolloProvider>
    </div>
  );
}

export default App;

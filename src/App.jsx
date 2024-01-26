import React from "react";
import {Routes, Route} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import MainPage from "./pages/MainPage";
import AboutField from "./pages/AboutField";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutField />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

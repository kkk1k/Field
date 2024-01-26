import React from "react";
import {Routes, Route} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import MainPage from "./pages/MainPage";
import AboutField from "./pages/AboutField";
import GlobalStyle from "./GlobalStyle";
import FieldCamp from "./pages/FieldCamp";
import FieldNews from "./pages/FieldNews";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutField />} />
        <Route path='/camp' element={<FieldCamp />} />
        <Route path='/news' element={<FieldNews />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

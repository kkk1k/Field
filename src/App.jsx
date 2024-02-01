import React from "react";
import {Routes, Route} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import MainPage from "./pages/MainPage";
import AboutField from "./pages/AboutField";
import GlobalStyle from "./GlobalStyle";
import FieldCamp from "./pages/FieldCamp";
import FieldNews from "./pages/FieldNews";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import Album from "./pages/Album";
import Sns from "./pages/Sns";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutField />} />
          <Route path='/camp' element={<FieldCamp />} />
          <Route path='/news' element={<FieldNews />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/album' element={<Album />} />
          <Route path='/sns' element={<Sns />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

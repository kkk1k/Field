import {Routes, Route} from "react-router-dom";
import React from "react";
import MainPage from "./pages/MainPage";
import AboutField from "./pages/AboutField";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/about' element={<AboutField />} />
    </Routes>
  );
}

export default App;

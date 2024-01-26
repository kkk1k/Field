import {Routes, Route} from "react-router-dom";
import React from "react";
import MainPage from "./pages/MainPage";
import AboutField from "./pages/AboutField";
import FieldCamp from "./pages/FieldCamp";
import FieldNews from "./pages/FieldNews";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/about' element={<AboutField />} />
      <Route path='/camp' element={<FieldCamp />} />
      <Route path='/news' element={<FieldNews />} />
    </Routes>
  );
}

export default App;

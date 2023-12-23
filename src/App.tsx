import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pagues/home/home";
import Game from "./pagues/game/game";
import { useState } from "react";

const App = () => {
  const [] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vaults from "./Pages/Vaults";
import Swap from "./Pages/Swap";
import Pay from "./Pages/Pay";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/vaults" element={<Vaults/>}/>
          <Route path="/swap" element={<Swap />}/>
          <Route path="/pay" element={<Pay />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

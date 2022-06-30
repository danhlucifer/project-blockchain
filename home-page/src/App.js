import React from "react";
import Home from "./Pages/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vaults from "./Pages/Vaults";
import Swap from "./Pages/Swap";
import Pay from "./Pages/Pay";
import Settings from "./Pages/Settings";
import Notifica from "./Pages/Notifica";
import Referrals from "./Pages/Referrals";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/vaults" element={<Vaults/>}/>
          <Route path="/swap" element={<Swap />}/>
          <Route path="/pay" element={<Pay />}/>
          <Route path="/notifica" element={<Notifica />}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/referrals" element={<Referrals />}/>
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

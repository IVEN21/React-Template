import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import Home from "./components/page/home/Index";
import User from "./components/page/user/Index";
import Event from "./components/page/event/Index";

import Navbar from "./components/widget/navbar/Index";

// css
import "./components/global-asset/css/normalize.css";
import "./components/global-asset/css/global.scss";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;

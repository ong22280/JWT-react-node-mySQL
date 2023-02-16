import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./Login";
import Welcome from "./Welcome";
import Register from "./Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  </BrowserRouter>
);

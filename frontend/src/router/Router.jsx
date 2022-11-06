import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "src/App";
import Dashboard from "src/pages/dashboard/Dashboard";
import Home from "src/pages/home/Home";
const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Router;

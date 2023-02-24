import React from "react";
import { Routes, Route } from "react-router-dom";
import TopMenu from "./components/TopMenu";
import MyNotion from "./pages/MyNotion";
import { ServiceManagement } from "./pages/ServiceManagement";

export const App = () => {
  return (
    <>
        <TopMenu />
        <Routes>
          <Route path="/" element={<ServiceManagement />} />
          <Route path="/my-notion" element={<MyNotion />} />
        </Routes>
    </>
  );
};

import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import MyNotion from "./pages/MyNotion";
import { ServiceManagement } from "./pages/ServiceManagement";

export const App = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/my-notion">My notion</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" element={<ServiceManagement />} />
          <Route path="/my-notion" element={<MyNotion />} />
        </Routes>
      </div>
    </>
  );
};

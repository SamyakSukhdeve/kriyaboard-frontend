import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup.jsx";
import Protected from "./Protected.jsx";
import Dashboard from "./pages/Dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

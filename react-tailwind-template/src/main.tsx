import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter, Navigate, Route } from "react-router-dom";
import { Routes } from "react-router";
import Page1 from "./pages/Page1.tsx";
import Page2 from "./pages/Page2.tsx";
import Page3 from "./pages/Page3.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Page1 />}>
            Page 1
          </Route>
          <Route path="/page2" element={<Page2 />}>
            Page 2
          </Route>
          <Route path="/page3" element={<Page3 />}>
            Page 3
          </Route>
        </Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);

import React from "react";
import './App.css';
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import Footer from "./components/Footer/Footer";
import FAQs from "./components/FAQs/FAQs";


function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet  />
      <FAQs />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;

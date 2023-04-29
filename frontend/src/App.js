// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import {KEY} from "./localKey";
import axios from "axios";
import React, { useState, useEffect } from 'react';


// Pages Imports
import YouTubePage from "./pages/YouTubePage/YouTubePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<YouTubePage />}/>
        <Route path="<videoID>/" element ={<VideoPage />}/>
        <Route path="/search/:searchInput" element ={<SearchResultsPage />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

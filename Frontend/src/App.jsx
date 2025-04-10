import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Pages
import LandingPage from './Components/LandingPage/Landingpage';
import LoginPage from './Components/LandingPage/LoginPage';
import ErrorPage from './Components/ErrorPage';
import ScrollToTopButton from './Components/LandingPage/ScrollToTopButton';
import RegisterUser from './Components/Admin/Newuser';

function App() {
  // ✅ useEffect correctly placed inside the component
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;

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
import RegisterUser from './Pages/Admin/NewUser';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import ViewUsers from './Pages/Admin/ViewUsers';
import UserDetail from './pages/Admin/UserDetail';
import AddProduct from './pages/Admin/AddProduct';
import ViewProducts from './pages/Admin/ViewProducts';
import ProductDetail from './pages/Admin/ProductDetail';
import AdminProfile from './pages/Admin/AdminProfile';
import Reports from './pages/Admin/Reports';

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
        <Route path="/admin/admin-register" element={<RegisterUser />} />
        <Route path="/admin/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="/admin/view-users" element={<ViewUsers />} />
        <Route path="/admin/user/:id" element={<UserDetail />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/view-products" element={<ViewProducts />} />
        <Route path="/admin/product/:type/:id" element={<ProductDetail />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;

import React from 'react'; // import library react
import { Routes, Route } from 'react-router-dom'; // import library react-router-dom
import Home from '../Home'; // import halaman Home 
import Login from '../Login'; // import halaman Login
import Register from '../Register'; // import halaman Register

// ini pakai arrow function juga
const AppRoutes = () => {
  return (
    <Routes>
      {/* routingnya ada di sini*/}
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

// ekspor AppRoutes
export default AppRoutes;

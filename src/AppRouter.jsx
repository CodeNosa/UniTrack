import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login'; // Assurez-vous que le fichier s'appelle Login.tsx
import Dashboard from './prof/Dashboard';
import appel from './prof/Appel';
import Cours from './prof/Cours';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
       <Route path="/prof" element={<Dashboard />} />
        <Route path="/prof/appel" element={<appel />} />
        <Route path="/prof/cours" element={<Cours />} />
      </Routes>
    </BrowserRouter>
  );
}

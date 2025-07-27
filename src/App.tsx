import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Departments from './pages/Departments';
import Doctors from './pages/Doctors';
import Appointments from './pages/Appointments';
import PatientPortal from './pages/PatientPortal';
import AdminDashboard from './pages/AdminDashboard';
import Contact from './pages/Contact';
import EmergencyButton from './components/ui/EmergencyButton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/patient-portal" element={<PatientPortal />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <EmergencyButton />
      </div>
    </Router>
  );
}

export default App;
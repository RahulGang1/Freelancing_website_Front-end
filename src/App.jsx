import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login'; 
import SignupPage from './components/SignUp'; 
import Navbar from './components/Navbar'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; 
import Home from './components/Home';
import ProjectForm from './components/ProjectForm';
import ProjectsSuggestions from './components/ProjectsSuggestions';
import NavAdmin from './components/Nav-admin';
import Reviews from './components/Reviews';
import Profile from './components/Profile';
import AdminSignup from './components/AdminSinUp';
import { useState } from 'react';
import ContactPage from './components/ContactPage';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false); // Start with isAdmin as false
  


  return (
    <Router>
      {isAdmin ? (
        <>
          <NavAdmin />
          <Routes>
            <Route path="/signup" element={<AdminSignup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<ProjectForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginPage setIsAdmin={setIsAdmin} />} />
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<ProjectsSuggestions />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/Contact-Data" element={< ContactPage/>} />
          </Routes>
          <Footer />
        </>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage setIsAdmin={setIsAdmin} />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<ProjectForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<ProjectsSuggestions />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;

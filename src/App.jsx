import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login'; // import your LoginPage component (correct file path)
import SignupPage from './components/SignUp'; // import your SignupPage component (correct file path)
import Navbar from './components/Navbar'; // import your Navbar component
import Contact from './components/Contact'; // import your Contact component (correct file path)
import Footer from './components/Footer'; // import your Footer component (correct file path)
import Home from './components/Home';
import ProjectForm from './components/ProjectForm';
import Reviews from './components/Reviews';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<ProjectForm/>} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

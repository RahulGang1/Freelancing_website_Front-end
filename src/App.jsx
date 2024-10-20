import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login'; // import your LoginPage component (correct file path)
import SignupPage from './components/SignUp'; // import your SignupPage component (correct file path)
import Navbar from './components/Navbar'; // import your Navbar component
import Contact from './components/Contact'; // import your Contact component (correct file path)
import Footer from './components/Footer'; // import your Footer component (correct file path)

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} /> {/* Home route can be LoginPage */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

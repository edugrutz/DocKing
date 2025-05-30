import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Downloads from './components/Downloads';
import './App.css';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import About from './components/About';
import UserManual from './components/UserManual';

function App() {
  return (
    <div className='app-background'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/usermanual" element={<UserManual />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

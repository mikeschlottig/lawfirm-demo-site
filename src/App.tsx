import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import PersonalInjury from './pages/PersonalInjury';
import ProbateLaw from './pages/ProbateLaw';
import RealEstateLaw from './pages/RealEstateLaw';
import CarTruckAccidents from './pages/CarTruckAccidents';
import WillsTrusts from './pages/WillsTrusts';
import Divorces from './pages/Divorces';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-navy-900 text-white font-inter">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal-injury" element={<PersonalInjury />} />
          <Route path="/probate-law" element={<ProbateLaw />} />
          <Route path="/real-estate-law" element={<RealEstateLaw />} />
          <Route path="/car-truck-accidents" element={<CarTruckAccidents />} />
          <Route path="/wills-trusts" element={<WillsTrusts />} />
          <Route path="/divorces" element={<Divorces />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;

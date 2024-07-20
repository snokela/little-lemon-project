import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SelectRestaurantPage from './components/SelectRestaurantPage';
import FillFormPage from './components/FillFormPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Nav />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/select-restaurant" element={<SelectRestaurantPage />} />
            <Route path="/fill-form" element={<FillFormPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

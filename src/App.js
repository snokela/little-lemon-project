import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SelectRestaurantPage from './components/SelectRestaurantPage';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
import ConfirmationPage from './components/ConfirmationPage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import OrderOnlinePage from './components/OrderOnlinePage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Nav />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/select-restaurant" element={<SelectRestaurantPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/orederOnline" element={<OrderOnlinePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ArtistsPage from './pages/ArtistsPage';
import LearnPage from './pages/LearnPage';
import ArtistProfile from './pages/ArtistProfile';
import CourseDetails from './pages/CourseDetails';
import Register from './pages/Register';
import Signin from './pages/Signin';
// import Ownart from './pages/Ownart';
import CustomizeArt from './pages/CustomizeArt';
import AddToCart from './pages/AddToCart';
import BuyNow from './pages/BuyNow';
import AddYourArt from './pages/AddYourArt';
import OwnArt from './pages/OwnArt';
import BuyArt from './pages/BuyArt';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/artists/:id" element={<ArtistProfile />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/CourseDetails/:id" element={<CourseDetails />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Signin />} />
            {/* <Route path="/ownart" element={<Ownart />} /> */}
            <Route path="/customize-art/:artistId" element={<CustomizeArt />} />
            <Route path="/cart" element={<AddToCart />} />
            <Route path="/buy-now" element={<BuyNow />} />
            <Route path="/addyourart" element={<AddYourArt />} />
            <Route path="/own-art" element={<OwnArt />} />
            <Route path="/buy-art/:artId" element={<BuyArt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
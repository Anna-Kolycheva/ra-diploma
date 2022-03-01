import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContainer from './components/MainContainer/MainContainer';
import HomePage from './components/Pages/HomePage/HomePage';
import AboutPage from './components/Pages/AboutPage/AboutPage';
import ContactPage from './components/Pages/ContactPage/ContactPage';
import CartPage from './components/Pages/CartPage/CartPage';
import Page404 from './components/Pages/Page404/Page404';
import ProductPage from './components/Pages/ProductPage/ProductPage';
import CatalogPage from './components/Pages/CatalogPage/CatalogPage';

function App() {
   return (
      <Router>
         <Header />
         <MainContainer>
            <Routes>
               <Route path={'/' || 'ra-diploma'} element={<HomePage />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="/contacts" element={<ContactPage />} />
               <Route path="/cart" element={<CartPage />} />
               <Route path="/catalog" element={<CatalogPage />} />
               <Route path="/catalog/:id" element={<ProductPage />} />
               <Route path="*" element={<Page404 />} />
            </Routes>
         </MainContainer>
         <Footer />
      </Router>
   );
}

export default App;

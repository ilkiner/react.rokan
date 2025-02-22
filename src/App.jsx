import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/ui/HomePage';
import UiLayout from './components/layout';
import ShopLayout from './pages/ui/ShopLayout'; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UiLayout><HomePage /></UiLayout>} />
        <Route path="/shop" element={<UiLayout><ShopLayout /></UiLayout>} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { BooksSection } from './pages/BooksSection';
import { ShoppingCart } from './pages/ShoppingCart';
import { Success } from './pages/Success';
import { useState } from 'react';
import { ShopContextProvider } from './context/ShopContext';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <ShopContextProvider>
        <Navbar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route
            path="/"
            element={<BooksSection searchQuery={searchQuery} />}
          />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
};

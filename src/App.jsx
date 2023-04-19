import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { BooksSection } from './pages/BooksSection';
import { ShoppingCart } from './pages/ShoppingCart';
import { Success } from './pages/Success';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksSection />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
};

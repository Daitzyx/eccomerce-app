import { Route, Routes } from 'react-router-dom';

import { Products } from '../Pages/Products';
import { ProductItem } from '../Pages/ProductItem';
import { Checkout } from '../Pages/Checkout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product/:id" element={<ProductItem />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

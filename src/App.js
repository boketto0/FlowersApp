import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './containers/home/Home';
import CartPage from './containers/pages/cartPage/CartPage';
import { AuthorsBouquetsPage } from './containers/pages/bouqetsPages/authorsBouquetsPage/AuthorsBouquetsPage';
import { BasketBouquetsPage } from './containers/pages/bouqetsPages/basketBouquetsPage/BasketBouquetsPage';
import { MonoBouquetsPage } from './containers/pages/bouqetsPages/monoBouquetsPage/MonoBouquetsPage';
import store from './assets/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/authorsBouquets" element={<AuthorsBouquetsPage />} />
            <Route path="/monoBouquets" element={<MonoBouquetsPage />} />
            <Route path="/basketBouquets" element={<BasketBouquetsPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default App;

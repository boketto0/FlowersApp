import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './containers/home/Home';
import CartPage from './containers/pages/cartPage/CartPage';
import { AuthorsBouquetsPage } from './containers/pages/bouqetsPages/authorsBouquetsPage/AuthorsBouquetsPage';

const App = () => {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/authorsBouquets" element={<AuthorsBouquetsPage/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
